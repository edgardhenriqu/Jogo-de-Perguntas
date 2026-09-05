import { deckBg, pad } from "../utils.js";
import Motif from "./Motif.jsx";

/* o baralho 11 usa um verso mais escuro, para nao se confundir com um tema */
export default function ThemeCard({ theme, index, total, seenCount, secret, onOpen }) {
  const done = seenCount === total;

  return (
    <button
      type="button"
      className={"tcard" + (done ? " done" : "") + (secret ? " secret" : "")}
      style={{ backgroundImage: deckBg(secret ? "#5E0C22" : theme.c) }}
      aria-label={`${theme.name}, ${seenCount} de ${total} cartas vistas`}
      onClick={onOpen}
    >
      <span className="top">
        <span>{secret ? "só entre nós" : "10 dates"}</span>
        <span>{pad(index + 1)}</span>
      </span>
      {secret && (
        <span className="tmark" aria-hidden="true">
          <Motif name="chama" />
        </span>
      )}
      <span>
        <span className="num">{pad(index + 1)}</span>
        <span className="name">{theme.name}</span>
        <span className="meta">
          <span className="bar">
            <u style={{ width: (seenCount / total) * 100 + "%" }} />
          </span>
          {done ? "completo" : `${seenCount}/${total}`}
        </span>
      </span>
    </button>
  );
}
