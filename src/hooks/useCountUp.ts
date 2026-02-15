import { useEffect, useState } from "react";

/**
 * Parse value like "500+", "98%", "50K+", "2.5M+" for count-up animation.
 */
function parseStat(value: string): { end: number; suffix: string; isK: boolean; isDecimal: boolean } {
  const match = value.match(/^([\d.]+)([KM+%]*)$/);
  if (!match) return { end: 0, suffix: value, isK: false, isDecimal: false };
  const num = match[1];
  const suffix = match[2] || "";
  const isK = suffix.includes("K");
  const isM = suffix.includes("M");
  let end = parseFloat(num);
  if (isK) end = Math.round(end);
  else if (!isM) end = Math.round(end);
  return { end, suffix, isK, isDecimal: value.includes(".") };
}

export function useCountUp(value: string, isInView: boolean): string {
  const { end, suffix, isK, isDecimal } = parseStat(value);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const start = 0;
    const duration = 1800;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = start + (end - start) * easeOut;
      setCount(isDecimal ? Math.round(current * 10) / 10 : Math.round(current));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [end, isInView, isDecimal]);

  if (isK) return `${count}K+`;
  if (suffix.includes("M")) return `${count}M+`;
  if (suffix) return `${count}${suffix}`;
  return `${count}`;
}
