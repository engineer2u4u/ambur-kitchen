#!/usr/bin/env bash
#
# Build the static export and publish it to SiteGround over SSH.
#
#   ./deploy/deploy.sh         build and publish
#   ./deploy/deploy.sh --dry   report what would change, transfer nothing
#
# Why the staging dance rather than a plain `scp -r`: publishing has to remove
# files the build no longer contains, and Windows has no local rsync. So the
# tree goes up as a tarball, unpacks into a staging directory, and the server
# copies it into the document root — deleting whatever staging lacks.
#
# This used to be a server-side `rsync -a --delete`. SiteGround's rsync is now
# 3.5.0 and its receiver fails `chdir` with EPERM on every destination, even a
# directory we just created and own, while cp and tar work in the same shell.
# Until that is fixed upstream, the copy and the prune are done by hand.
#
set -euo pipefail

cd "$(dirname "$0")/.."

# Per-machine overrides, kept out of git. See deploy.env.example.
[ -f deploy/deploy.env ] && . deploy/deploy.env

SSH_HOST="${SSH_HOST:-siteground-ambur}"
REMOTE_ROOT="${REMOTE_ROOT:-/home/customer/www/theamburkitchen.nl/public_html}"
STAGING="${STAGING:-/home/customer/tmp/ambur-deploy}"

DRY=""
[ "${1:-}" = "--dry" ] && DRY="1"

echo "==> Building static export"
npm run build

echo "==> Adding .htaccess to the build"
cp deploy/.htaccess out/.htaccess

echo "==> Uploading to ${SSH_HOST}:${STAGING}"
tar -czf - -C out . |
  ssh "$SSH_HOST" "rm -rf '$STAGING' && mkdir -p '$STAGING' && tar -xzf - -C '$STAGING'"

echo "==> Syncing into ${REMOTE_ROOT}${DRY:+  (dry run — nothing written)}"
ssh "$SSH_HOST" "STAGING='$STAGING' REMOTE_ROOT='$REMOTE_ROOT' DRY='$DRY' sh -s" <<'REMOTE'
set -eu
mkdir -p "$REMOTE_ROOT"

# Paths --delete must never touch: ACME writes into .well-known during
# certificate renewal, and the rest are SiteGround's own, not ours to remove.
keep() {
  case "$1" in
    ./.well-known|./.well-known/*|./cgi-bin|./cgi-bin/*|./.htpasswd|./.user.ini)
      return 0 ;;
    *) return 1 ;;
  esac
}

# Remove anything the new build no longer contains, deepest first so a
# directory is only considered once its contents are gone.
cd "$REMOTE_ROOT"
find . -mindepth 1 -depth | while IFS= read -r p; do
  if keep "$p"; then
    continue
  fi
  if [ -e "$STAGING/$p" ] || [ -L "$STAGING/$p" ]; then
    continue
  fi
  if [ -n "$DRY" ]; then
    echo "would delete $p"
  else
    rm -rf -- "$p"
  fi
done

if [ -n "$DRY" ]; then
  echo "would copy $(find "$STAGING" -type f | wc -l) files into $REMOTE_ROOT"
else
  cp -a "$STAGING/." "$REMOTE_ROOT/"
  echo "copied $(find "$REMOTE_ROOT" -type f | wc -l) files into place"
fi
REMOTE

if [ -n "$DRY" ]; then
  echo "==> Dry run finished. Staging left at $STAGING for inspection."
else
  ssh "$SSH_HOST" "rm -rf '$STAGING'"
  echo "==> Live at https://theamburkitchen.nl"
fi
