import { CARDS_POR_TEMA } from "../data/themes.js";
import { deckBg, pad } from "../utils.js";

export default function ThemeCard({ theme, index, seenCount, onOpen }) {
  const done = seenCount === CARDS_POR_TEMA;

  return (
    <button
      type="button"
      className={"tcard" + (done ? " done" : "")}
      style={{ backgroundImage: deckBg(theme.c) }}
      aria-label={`${theme.name}, ${seenCount} de ${CARDS_POR_TEMA} cartas vistas`}
      onClick={onOpen}
    >
      <span className="top">
        <span>10 dates</span>
        <span>{pad(index + 1)}</span>
      </span>
      <span>
        <span className="num">{pad(index + 1)}</span>
        <span className="name">{theme.name}</span>
        <span className="meta">
          <span className="bar">
            <u style={{ width: (seenCount / CARDS_POR_TEMA) * 100 + "%" }} />
          </span>
          {done ? "completo" : `${seenCount}/${CARDS_POR_TEMA}`}
        </span>
      </span>
    </button>
  );
}
