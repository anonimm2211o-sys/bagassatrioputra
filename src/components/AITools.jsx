import { useState } from "react";
import { ChevronDown, ShieldQuestion } from "lucide-react";
import Section from "./Section.jsx";
import { AI_TOOLS, PROMPT_STEPS } from "../data.js";

function AIToolCard({ tool }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`ai-card ${open ? "is-open" : ""}`}>
      <button className="ai-card-head" onClick={() => setOpen((v) => !v)} aria-expanded={open} type="button">
        <span className="ai-card-name">{tool.name}</span>
        <span className="ai-card-teaser">{tool.teaser}</span>
        <ChevronDown size={16} className="ai-card-chevron" />
      </button>
      <div className="ai-card-body">
        <p>{tool.desc}</p>
      </div>
    </div>
  );
}

export default function AITools({ reduced }) {
  return (
    <Section id="ai" eyebrow="AI" title="AI yang pernah gue eksplorasi" reduced={reduced}>
      <div className="ai-grid">
        {AI_TOOLS.map((t) => (
          <AIToolCard key={t.name} tool={t} />
        ))}
      </div>

      <div className="prompt-block">
        <p className="sub-heading">Cara gue ngarahin AI</p>
        <p className="lead">
          Pake AI itu bukan soal nulis prompt sepanjang mungkin, tapi soal ngasih konteks, batasan,
          dan feedback yang tepat.
        </p>
        <div className="mini-diagram">
          {PROMPT_STEPS.map((s, i) => (
            <div className="mini-step" key={s.k}>
              <div className="mini-node">
                <span className="mini-dot">{i + 1}</span>
                {i < PROMPT_STEPS.length - 1 && <span className="mini-line" />}
              </div>
              <div className="mini-copy">
                <p className="mini-k">{s.k}</p>
                <p className="mini-d">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="exp-card">
        <div className="exp-head">
          <ShieldQuestion size={18} />
          <h3>Eksperimen Perilaku Model</h3>
        </div>
        <p>
          Bagian dari ngulik AI itu nyoba nyari batasnya — gimana model kayak ChatGPT atau Claude
          nanganin instruction hierarchy, di mana batas responsnya, dan gimana reaksinya kalau
          dikasih prompt yang aneh atau saling bertentangan. Ini soal rasa penasaran ke cara kerja
          dan desain keamanan model, bukan usaha buat nge-bypass apa pun. Gue nggak bikin atau
          nyebarin exploit, dan itu bukan sisi yang gue tertarikin.
        </p>
      </div>
    </Section>
  );
}
