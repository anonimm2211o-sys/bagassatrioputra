import { useEffect, useRef, useState } from "react";
import Section from "./Section.jsx";
import { BUILD_STEPS } from "../data.js";

export default function Workflow({ reduced }) {
  const [active, setActive] = useState(1);
  const hoverCapable = useRef(true);

  useEffect(() => {
    hoverCapable.current = window.matchMedia("(hover: hover)").matches;
  }, []);

  return (
    <Section id="cara-kerja" eyebrow="Cara Kerja" title="Cara Saya Membangun" reduced={reduced}>
      <p className="lead">
        Bukan cuma daftar skill — ini gimana prosesnya beneran jalan, dari bingung sampai jadi.
      </p>

      <div className="stepper">
        {BUILD_STEPS.map((s, i) => (
          <div
            key={s.id}
            className={`step ${active === i ? "is-active" : ""}`}
            onMouseEnter={() => {
              if (hoverCapable.current) setActive(i);
            }}
            onClick={() => setActive(i)}
          >
            <div className="step-marker">
              <span className="step-dot">{i + 1}</span>
              {i < BUILD_STEPS.length - 1 && (
                <span className="step-line">
                  <span className="step-line-fill" style={{ height: active > i ? "100%" : "0%" }} />
                </span>
              )}
            </div>
            <div className="step-body">
              <p className="step-label">{s.label}</p>
              <p className="step-desc">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
