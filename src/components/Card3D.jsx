import { deckBg, pad } from "../utils.js";
import Motif from "./Motif.jsx";

export default function Card3D({
  theme,
  cardIndex,
  question,
  art,
  flipped,
  onReveal,
  backRef
}) {
  function onKeyDown(e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onReveal();
    }
  }

  return (
    <div className={"card3d" + (flipped ? " flipped" : "")} style={{ color: theme.c }}>
      <div className="inner">
        <div
          className="face back"
          ref={backRef}
          role="button"
          tabIndex={0}
          aria-label="Virar carta"
          style={{ backgroundImage: deckBg(theme.c) }}
          onClick={onReveal}
          onKeyDown={onKeyDown}
        >
          <span className="crest">10 dates para se conectar</span>
          <span className="seal">{pad(cardIndex + 1)}</span>
          <span className="tname">{theme.name}</span>
          <span className="hint">Toque para virar</span>
        </div>

        <div className="face front">
          <div className="kicker">
            <span className="rule-line" style={{ color: theme.c }} />
            <b>{theme.name}</b>
          </div>
          <div className="headrow">
            <div className="qnum" style={{ color: theme.c }}>
              {pad(cardIndex + 1)}
            </div>
            <div className="art" style={{ color: theme.c }}>
              <Motif name={art} />
            </div>
          </div>
          <p className="question">{question}</p>
          <span className="foot">Leiam em voz alta · respondam os dois</span>
        </div>
      </div>
    </div>
  );
}
