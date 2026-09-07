import { useState } from "react";
import { ExternalLink, ArrowUpRight, ChevronDown } from "lucide-react";
import Section from "./Section.jsx";
import ProjectWorkflow from "./ProjectWorkflow.jsx";
import { PROJECTS } from "../data.js";

function ProjectCard({ p, reduced }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`project-card ${open ? "is-open" : ""}`}>
      <div className="project-head">
        <h3>{p.name}</h3>
        <span className="status-pill">{p.status}</span>
      </div>
      <p className="project-desc">{p.desc}</p>
      <div className="stack-row">
        {p.stack.map((s) => (
          <span key={s} className="stack-chip">
            {s}
          </span>
        ))}
      </div>

      <div className="project-actions">
        <a
          className="project-link"
          href={p.link || "#"}
          onClick={(e) => {
            if (!p.link) e.preventDefault();
          }}
        >
          <ExternalLink size={14} />
          {p.link ? "Lihat Proyek" : "Link menyusul"}
          <ArrowUpRight size={14} className="arrow" />
        </a>
        <button className="project-toggle" onClick={() => setOpen((v) => !v)} aria-expanded={open} type="button">
          {open ? "Sembunyikan proses" : "Lihat cara dibuat"}
          <ChevronDown size={14} className={`chev ${open ? "is-open" : ""}`} />
        </button>
      </div>

      <ProjectWorkflow reduced={reduced} />
    </div>
  );
}

export default function Projects({ reduced }) {
  return (
    <Section id="proyek" eyebrow="Proyek" title="Beberapa hal yang lagi gue bangun" reduced={reduced}>
      <div className="projects-grid">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.name} p={p} reduced={reduced} />
        ))}
      </div>
    </Section>
  );
}
