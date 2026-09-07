import { useScramble } from "../hooks.js";

export default function Hero({ revealed, reduced }) {
  const name = useScramble("Bagas Satrio Putra", { reduced, trigger: revealed, speed: 26 });
  const stage = (ms) => ({ transitionDelay: reduced ? "0ms" : `${ms}ms` });
  const v = revealed ? "is-visible" : "";

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });

  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        <div className={`hero-photo fade-up ${v}`} style={stage(300)}>
          <img
            src="/poto.png"
            alt="Foto profil Bagas Satrio Putra"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              e.currentTarget.nextElementSibling.style.display = "flex";
            }}
          />
          <div className="hero-photo-fallback" style={{ display: "none" }}>
            foto
          </div>
        </div>

        <p className={`eyebrow-line fade-up ${v}`} style={stage(450)}>
          Halo, gue
        </p>
        <h1 className={`hero-name fade-up ${v}`} style={stage(450)}>
          {name || "\u00A0"}
        </h1>
        <p className={`hero-sub fade-up ${v}`} style={stage(600)}>
          Ngulik web, AI, dan berbagai hal yang bikin penasaran.
        </p>

        <div className={`hero-cta fade-up ${v}`} style={stage(750)}>
          <button className="btn-primary" onClick={() => scrollTo("proyek")} type="button">
            Lihat Proyek
          </button>
          <button className="btn-ghost" onClick={() => scrollTo("cara-kerja")} type="button">
            Cara Gue Kerja
          </button>
        </div>
      </div>
    </section>
  );
}
