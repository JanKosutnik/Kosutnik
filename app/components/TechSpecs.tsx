"use client";

import { useEffect, useState } from "react";

function LjubljanaClock() {
  const [time, setTime] = useState("--:--:--");

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString("en-GB", {
          timeZone: "Europe/Ljubljana",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return <>{time}</>;
}

const rows: { label: string; value: React.ReactNode }[] = [
  { label: "LOCATION", value: "LJUBLJANA" },
  { label: "STATUS", value: "ACTIVE" },
  { label: "FOCUS", value: "DESIGN ENGINEERING" },
  { label: "LOCAL TIME", value: <LjubljanaClock /> },
];

export default function TechSpecs() {
  return (
    <section className="border-b border-black/10 py-10">
      <div className="grid grid-cols-[160px_1fr] gap-y-3">
        {rows.map(({ label, value }) => (
          <div key={label} className="contents">
            <span className="text-xs tracking-[0.2em] uppercase text-black/40">
              {label}
            </span>
            <span className="text-xs tracking-[0.2em] uppercase tabular-nums">
              {value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
