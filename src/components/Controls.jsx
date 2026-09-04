import { pad } from "../utils.js";

export default function Controls({ total, pos, color, onPrev, onNext, onJump }) {
  return (
    <div className="controls">
      <button className="icon" type="button" aria-label="Carta anterior" onClick={onPrev}>
        ←
      </button>

      <div className="pips" style={{ color }}>
        {Array.from({ length: total }, (_, i) => (
          <button
            key={i}
            type="button"
            className={"pip" + (i === pos ? " now" : i < pos ? " seen" : "")}
            aria-label={`Carta ${i + 1}`}
            onClick={() => onJump(i)}
          />
        ))}
      </div>

      <span className="counter">
        {pad(pos + 1)} / {pad(total)}
      </span>

      <button className="icon" type="button" aria-label="Próxima carta" onClick={onNext}>
        →
      </button>
    </div>
  );
}
