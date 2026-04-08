import { useState, useEffect, useRef } from "react";

export default function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => e.isIntersecting && setV(true), { threshold });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return [ref, v];
}
