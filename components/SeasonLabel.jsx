'use client';
import { useState, useEffect } from 'react';

export default function SeasonLabel() {
  const [label, setLabel] = useState('');

  useEffect(() => {
    const m = +new Intl.DateTimeFormat('en-GB', { month: 'numeric', timeZone: 'Europe/Ljubljana' }).format(new Date());
    const groups = { spring: [3, 4, 5], summer: [6, 7, 8], autumn: [9, 10, 11], winter: [12, 1, 2] };
    let name = '', pos = 1;
    for (const k in groups) {
      const i = groups[k].indexOf(m);
      if (i > -1) { name = k; pos = i; break; }
    }
    if (name) setLabel((pos === 0 ? 'early ' : pos === 2 ? 'late ' : '') + name);
  }, []);

  return <span className="g-gloss">{label || ' '}</span>;
}
