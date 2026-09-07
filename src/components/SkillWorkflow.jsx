import Section from "./Section.jsx";
import { useReveal } from "../hooks.js";
import { SKILL_WORKFLOWS, EVERYDAY_TOOLS } from "../data.js";

function SkillChain({ chain, reduced }) {
  const [ref, visible] = useReveal(reduced);
  return (
    <div className="chain" ref={ref}>
      {chain.map((c, i) => (
        <span
          key={c}
          className={`chain-item ${visible ? "is-visible" : ""}`}
          style={{ transitionDelay: reduced ? "0ms" : `${i * 70}ms` }}
        >
          {c}
          {i < chain.length - 1 && <span className="chain-arrow">→</span>}
        </span>
      ))}
    </div>
  );
}

export default function SkillWorkflow({ reduced }) {
  return (
    <Section id="keahlian" eyebrow="Keahlian" title="Bukan daftar skill, tapi cara makenya" reduced={reduced}>
      <div className="skill-grid">
        {SKILL_WORKFLOWS.map((s) => (
          <div className="skill-card" key={s.name}>
            <p className="skill-name">{s.name}</p>
            <SkillChain chain={s.chain} reduced={reduced} />
            <p className="skill-desc">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="tools-row">
        <p className="tools-label">Alat sehari-hari</p>
        <div className="tool-chips">
          {EVERYDAY_TOOLS.map((t) => (
            <span key={t} className="tool-chip">
              {t}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
