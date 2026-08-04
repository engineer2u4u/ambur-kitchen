"use client";

import { useState, type CSSProperties, type FormEvent } from "react";
import { colors, cream, goldA } from "@/lib/theme";

const inputStyle: CSSProperties = {
  background: "rgba(10,20,40,.6)",
  border: `1px solid ${goldA(0.3)}`,
  color: colors.cream,
  padding: "14px 16px",
  fontFamily: "var(--font-jost), Jost, sans-serif",
  fontSize: 15,
  fontWeight: 300,
  outline: "none",
  width: "100%",
  boxSizing: "border-box",
  colorScheme: "dark",
};

const areaStyle: CSSProperties = { ...inputStyle, resize: "vertical" };

type Form = {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  notes: string;
};

const EMPTY: Form = {
  name: "",
  phone: "",
  date: "",
  time: "",
  guests: "2",
  notes: "",
};

export default function ReservationForm() {
  const [form, setForm] = useState<Form>(EMPTY);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const set = (key: keyof Form) => (value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const { name, phone, date, time } = form;
    if (!name || !phone || !date || !time) {
      setError("Please fill in your name, contact, date and time.");
      return;
    }
    setError("");
    setSent(true);
  };

  return (
    <div
      id="reserve"
      className="reserve-panel"
      style={{
        border: `1px solid ${goldA(0.35)}`,
        background: `radial-gradient(ellipse 80% 60% at 50% 0%,${goldA(
          0.08,
        )},transparent 70%),${colors.navyPanel}`,
        padding: "40px 42px",
        scrollMarginTop: 104,
      }}
    >
      <h2
        className="reserve-title"
        style={{
          fontFamily: "var(--font-cormorant), serif",
          fontSize: 34,
          fontWeight: 600,
          margin: 0,
          color: colors.cream,
        }}
      >
        Reserve a table
      </h2>
      <p
        style={{
          margin: "10px 0 26px",
          fontWeight: 300,
          fontSize: 14.5,
          color: cream(0.65),
        }}
      >
        We&apos;ll confirm by phone or email within a few hours.
      </p>

      {sent ? (
        <div
          role="status"
          style={{
            border: "1px solid rgba(127,176,105,.5)",
            background: "rgba(127,176,105,.1)",
            padding: "22px 24px",
            fontWeight: 300,
            fontSize: 15,
            lineHeight: 1.6,
            color: colors.cream,
          }}
        >
          ✓ Thank you, <b>{form.name}</b> — your request for{" "}
          <b>{form.guests}</b> guests on <b>{form.date}</b> at <b>{form.time}</b>{" "}
          has been received. We&apos;ll confirm shortly.
        </div>
      ) : (
        <form
          onSubmit={submit}
          noValidate
          style={{ display: "flex", flexDirection: "column", gap: 16 }}
        >
          <div
            className="form-row-2"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
            }}
          >
            <input
              value={form.name}
              onChange={(e) => set("name")(e.target.value)}
              placeholder="Your name"
              aria-label="Your name"
              style={inputStyle}
            />
            <input
              value={form.phone}
              onChange={(e) => set("phone")(e.target.value)}
              placeholder="Phone or email"
              aria-label="Phone or email"
              style={inputStyle}
            />
          </div>

          <div
            className="form-row-3"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 16,
            }}
          >
            <input
              type="date"
              value={form.date}
              onChange={(e) => set("date")(e.target.value)}
              aria-label="Date"
              style={inputStyle}
            />
            <input
              type="time"
              value={form.time}
              onChange={(e) => set("time")(e.target.value)}
              aria-label="Time"
              style={inputStyle}
            />
            <input
              type="number"
              value={form.guests}
              onChange={(e) => set("guests")(e.target.value)}
              min={1}
              max={20}
              placeholder="Guests"
              aria-label="Number of guests"
              style={inputStyle}
            />
          </div>

          <textarea
            value={form.notes}
            onChange={(e) => set("notes")(e.target.value)}
            placeholder="Allergies, occasions, high chair…"
            aria-label="Notes"
            rows={3}
            style={areaStyle}
          />

          {error && (
            <div role="alert" style={{ fontSize: 13.5, color: colors.error }}>
              {error}
            </div>
          )}

          <button
            type="submit"
            className="btn-primary"
            style={{
              background: `linear-gradient(135deg,${colors.goldLight},${colors.gold})`,
              color: colors.navy,
              border: "none",
              padding: 16,
              fontFamily: "var(--font-jost), Jost, sans-serif",
              fontSize: 13.5,
              letterSpacing: "2.5px",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            REQUEST RESERVATION
          </button>
        </form>
      )}
    </div>
  );
}
