import { useState, useEffect } from 'react';

/**
 * Countdown
 * Live countdown to a target date. Re-renders every second.
 *
 * Props:
 *   target (string|Date) — target datetime, e.g. '2026-06-21T00:00:00+05:30'
 *   label  (string)      — small caption shown above the digits
 */
function diff(target) {
  const ms = Math.max(0, new Date(target).getTime() - Date.now());
  const days = Math.floor(ms / 86400000);
  const hours = Math.floor((ms % 86400000) / 3600000);
  const minutes = Math.floor((ms % 3600000) / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  return { days, hours, minutes, seconds, done: ms === 0 };
}

export default function Countdown({ target, label = "Father's Day is in" }) {
  const [t, setT] = useState(() => diff(target));

  useEffect(() => {
    const id = setInterval(() => setT(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  if (t.done) return null;

  const cell = (value, unit) => (
    <div className="flex flex-col items-center">
      <span className="font-display text-2xl sm:text-3xl text-navy-brand tabular-nums leading-none">
        {String(value).padStart(2, '0')}
      </span>
      <span className="font-body text-[10px] sm:text-xs text-navy-light uppercase tracking-wider mt-1">
        {unit}
      </span>
    </div>
  );

  return (
    <div className="inline-flex flex-col items-center">
      <span className="font-body text-xs text-rose-brand font-semibold uppercase tracking-wider mb-2">
        ⏳ {label}
      </span>
      <div className="flex items-center gap-3 sm:gap-4 bg-white/80 backdrop-blur-sm rounded-2xl px-5 sm:px-7 py-3.5 shadow-sm border border-gold-light/40">
        {cell(t.days, 'Days')}
        <span className="font-display text-2xl text-gold-brand -mt-3">:</span>
        {cell(t.hours, 'Hrs')}
        <span className="font-display text-2xl text-gold-brand -mt-3">:</span>
        {cell(t.minutes, 'Min')}
        <span className="font-display text-2xl text-gold-brand -mt-3">:</span>
        {cell(t.seconds, 'Sec')}
      </div>
    </div>
  );
}
