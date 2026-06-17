'use client';
import { useState, useEffect } from 'react';

export default function LjubljanaClock() {
  const [time, setTime] = useState('—:—');

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Europe/Ljubljana',
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);

  return <time>{time}</time>;
}
