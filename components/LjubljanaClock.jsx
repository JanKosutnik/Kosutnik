"use client";

import { useEffect, useState } from "react";

function getLjubljanaTime() {
  return new Date().toLocaleTimeString("en-GB", {
    timeZone: "Europe/Ljubljana",
    hour: "2-digit",
    minute: "2-digit"
  });
}

export default function LjubljanaClock() {
  const [time, setTime] = useState("--:--");
  const [year, setYear] = useState("2026");

  useEffect(() => {
    const tick = () => setTime(getLjubljanaTime());

    tick();
    setYear(String(new Date().getFullYear()));
    const interval = window.setInterval(tick, 15000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <footer>
      <div className="foot-inner">
        <span className="copyright">&copy; {year} Jan Košutnik</span>
        <span className="clockwrap">
          Ljubljana · <span>{time}</span>
          <svg className="orbit" viewBox="0 0 20 20" aria-hidden="true">
            <circle className="ring" cx="10" cy="10" r="6.8" />
            <circle className="sun" cx="10" cy="10" r="1.7" />
            <g className="planet">
              <circle cx="10" cy="3.2" r="1.3" />
            </g>
          </svg>
        </span>
      </div>
    </footer>
  );
}
