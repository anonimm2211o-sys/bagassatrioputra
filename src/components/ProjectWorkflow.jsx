import { PROCESS_CHAIN } from "../data.js";

export default function ProjectWorkflow({ reduced }) {
  return (
    <div className="project-process">
      <div className="chain">
        {PROCESS_CHAIN.map((c, i) => (
          <span
            key={c}
            className="chain-item is-visible"
            style={{ transitionDelay: reduced ? "0ms" : `${i * 60}ms` }}
          >
            {c}
            {i < PROCESS_CHAIN.length - 1 && <span className="chain-arrow">→</span>}
          </span>
        ))}
      </div>
      <p className="process-note">
        Proses standarnya: mulai dari ide kecil, riset singkat, minta AI bantu cari pendekatan awal,
        baru masuk coding — debug dan iterasi sampai hasilnya sesuai.
      </p>
    </div>
  );
}
