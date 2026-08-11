#!/usr/bin/env bash
#
# Build the static export and publish it to SiteGround over SSH.
#
#   ./deploy/deploy.sh         build and publish
#   ./deploy/deploy.sh --dry   report what would change, transfer nothing
#
# Why the staging + rsync dance rather than a plain `scp -r`: only rsync
# --delete removes files that no longer exist in the build, and Windows has no
# local rsync. So the tree goes up as a tarball and the server — which does
# have rsync — syncs from a staging directory into the document root.
#
set -euo pipefail

cd "$(dirname "$0")/.."

# Per-machine overrides, kept out of git. See deploy.env.example.
[ -f deploy/deploy.env ] && . deploy/deploy.env

SSH_HOST="${SSH_HOST:-siteground-ambur}"
REMOTE_ROOT="${REMOTE_ROOT:-/home/customer/www/theamburkitchen.nl/public_html}"
STAGING="${STAGING:-/home/customer/tmp/ambur-deploy}"

DRY=""
[ "${1:-}" = "--dry" ] && DRY="--dry-run"

# --delete must never reach these: ACME writes into .well-known during
# certificate renewal, and the rest are SiteGround's own, not ours to remove.
EXCLUDES="--exclude=.well-known/ --exclude=cgi-bin/ --exclude=.htpasswd --exclude=.user.ini"

echo "==> Building static export"
npm run build

echo "==> Adding .htaccess to the build"
cp deploy/.htaccess out/.htaccess

echo "==> Uploading to ${SSH_HOST}:${STAGING}"
tar -czf - -C out . |
  ssh "$SSH_HOST" "rm -rf '$STAGING' && mkdir -p '$STAGING' && tar -xzf - -C '$STAGING'"

echo "==> Syncing into ${REMOTE_ROOT}${DRY:+  (dry run — nothing written)}"
ssh "$SSH_HOST" "mkdir -p '$REMOTE_ROOT' && rsync -av --delete $DRY $EXCLUDES '$STAGING/' '$REMOTE_ROOT/'"

if [ -n "$DRY" ]; then
  echo "==> Dry run finished. Staging left at $STAGING for inspection."
else
  ssh "$SSH_HOST" "rm -rf '$STAGING'"
  echo "==> Live at https://theamburkitchen.nl"
fi
