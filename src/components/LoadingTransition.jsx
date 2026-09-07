export default function LoadingTransition({ text }) {
  return (
    <div className="loader-stage">
      <div className="loader-ring" aria-hidden="true">
        <span />
        <span />
      </div>
      <p className="loader-text">{text}</p>
    </div>
  );
}
