import { useReveal } from "../hooks.js";

export default function Section({ id, eyebrow, title, children, reduced }) {
  const [ref, visible] = useReveal(reduced);
  return (
    <section id={id} ref={ref} className={`block reveal ${visible ? "is-visible" : ""}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      {title && <h2 className="section-title">{title}</h2>}
      {children}
    </section>
  );
}
