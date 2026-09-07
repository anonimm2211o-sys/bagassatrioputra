import { useCallback, useEffect, useRef, useState } from "react";
import IntroVideo from "./components/IntroVideo.jsx";
import LoadingTransition from "./components/LoadingTransition.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Workflow from "./components/Workflow.jsx";
import SkillWorkflow from "./components/SkillWorkflow.jsx";
import AITools from "./components/AITools.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { usePrefersReducedMotion, useCursorGlow } from "./hooks.js";

export default function App() {
  const reduced = usePrefersReducedMotion();
  const [phase, setPhase] = useState(reduced ? "revealed" : "video"); // video -> transition -> revealed
  const [overlayMounted, setOverlayMounted] = useState(!reduced);
  const [loaderText, setLoaderText] = useState("Menyiapkan ruang kerja...");
  const videoRef = useRef(null);

  const advanceFromVideo = useCallback(() => {
    const v = videoRef.current;
    if (v) v.classList.add("is-ending");
    window.setTimeout(() => setPhase("transition"), reduced ? 0 : 350);
  }, [reduced]);

  // Reduced-motion: skip the decorative intro entirely.
  useEffect(() => {
    if (reduced) {
      setPhase("revealed");
      setOverlayMounted(false);
    }
  }, [reduced]);

  // Ultimate safety net (IntroVideo's own 2.5s quick-fail handles the normal
  // "file missing/blocked" case) — never let anything block the site forever.
  useEffect(() => {
    if (phase !== "video") return undefined;
    const hardCap = setTimeout(() => advanceFromVideo(), 20000);
    return () => clearTimeout(hardCap);
  }, [phase, advanceFromVideo]);

  // "Menyiapkan ruang kerja..." -> "Selamat datang." -> reveal.
  useEffect(() => {
    if (phase !== "transition") return undefined;
    setLoaderText("Menyiapkan ruang kerja...");
    const t1 = setTimeout(() => setLoaderText("Selamat datang."), 800);
    const t2 = setTimeout(() => setPhase("revealed"), 1600);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [phase]);

  // Keep the overlay mounted briefly so its fade/blur-out transition can play.
  useEffect(() => {
    if (phase === "revealed" && overlayMounted) {
      const t = setTimeout(() => setOverlayMounted(false), 550);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [phase, overlayMounted]);

  const cursorPos = useCursorGlow(reduced || phase !== "revealed");
  const revealed = phase === "revealed";

  return (
    <div className="app-root">
      {overlayMounted && (
        <div className={`intro-overlay ${revealed ? "is-leaving" : ""}`}>
          {phase === "video" && <IntroVideo videoRef={videoRef} onAdvance={advanceFromVideo} />}
          {phase === "transition" && <LoadingTransition text={loaderText} />}
        </div>
      )}

      {cursorPos && (
        <div
          className="cursor-glow"
          style={{ transform: `translate3d(${cursorPos.x - 220}px, ${cursorPos.y - 220}px, 0)` }}
          aria-hidden="true"
        />
      )}

      <div className={`aurora-bg ${revealed ? "is-visible" : ""}`} aria-hidden="true">
        <span className="aurora-blob a1" />
        <span className="aurora-blob a2" />
        <span className="aurora-blob a3" />
      </div>
      <div className="noise-overlay" aria-hidden="true" />

      <Navbar revealed={revealed} reduced={reduced} />
      <main>
        <Hero revealed={revealed} reduced={reduced} />
        <About reduced={reduced} />
        <Workflow reduced={reduced} />
        <SkillWorkflow reduced={reduced} />
        <AITools reduced={reduced} />
        <Projects reduced={reduced} />
        <Contact reduced={reduced} />
      </main>
      <Footer />
    </div>
  );
}
