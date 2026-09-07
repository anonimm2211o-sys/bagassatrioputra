import { useEffect, useRef, useState } from "react";

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

export function useReveal(reduced) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(reduced);
  useEffect(() => {
    if (reduced) return undefined;
    const el = ref.current;
    if (!el) return undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduced]);
  return [ref, visible];
}

// Konsep terinspirasi "Scrambled Text" / "Decrypted Text" di reactbits.dev —
// diimplementasikan ulang dari nol (bukan salinan kode), khusus project ini.
export function useScramble(text, { reduced, trigger = true, speed = 26 } = {}) {
  const [display, setDisplay] = useState(reduced ? text : "");
  const raf = useRef(null);
  const chars = "!<>-_\\/[]{}—=+*^?#________";

  useEffect(() => {
    if (!trigger) return undefined;
    if (reduced) {
      setDisplay(text);
      return undefined;
    }
    let cancelled = false;
    let frame = 0;

    const tick = () => {
      if (cancelled) return;
      frame += 1;
      const progress = frame / speed;
      const revealCount = Math.floor(progress * text.length * 1.4);

      let out = "";
      for (let i = 0; i < text.length; i++) {
        if (text[i] === " ") out += " ";
        else if (i < revealCount) out += text[i];
        else out += chars[Math.floor(Math.random() * chars.length)];
      }
      setDisplay(out);

      if (revealCount < text.length) raf.current = requestAnimationFrame(tick);
      else setDisplay(text);
    };

    raf.current = requestAnimationFrame(tick);
    return () => {
      cancelled = true;
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [trigger, reduced, text, speed]);

  return display;
}

// Konsep terinspirasi "Glow Cursor" di reactbits.dev — glow sangat halus yang
// mengikuti kursor. Nonaktif otomatis di layar sentuh & saat reduced-motion.
export function useCursorGlow(disabled) {
  const [pos, setPos] = useState(null);
  useEffect(() => {
    if (disabled) {
      setPos(null);
      return undefined;
    }
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!canHover) return undefined;
    let raf = null;
    let latest = null;
    const onMove = (e) => {
      latest = { x: e.clientX, y: e.clientY };
      if (raf) return;
      raf = requestAnimationFrame(() => {
        setPos(latest);
        raf = null;
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [disabled]);
  return pos;
}
