import { useCallback, useRef, useState } from "react";
import { THEMES } from "./data/themes.js";
import { useProgress } from "./hooks/useProgress.js";
import Hero from "./components/Hero.jsx";
import Rules from "./components/Rules.jsx";
import ThemeGrid from "./components/ThemeGrid.jsx";
import GameTable from "./components/GameTable.jsx";

export default function App() {
  const { markSeen, reset, seenCount } = useProgress();
  const [session, setSession] = useState(null);
  const lastFocus = useRef(null);

  const openTheme = useCallback((idx) => {
    lastFocus.current = document.activeElement;
    setSession({
      label: THEMES[idx].name,
      deck: THEMES[idx].cards.map((_, i) => ({ t: idx, i }))
    });
  }, []);

  const openDestino = useCallback(() => {
    lastFocus.current = document.activeElement;
    setSession({
      label: "Destino — uma carta de cada cor",
      deck: THEMES.map((t, idx) => ({
        t: idx,
        i: Math.floor(Math.random() * t.cards.length)
      }))
    });
  }, []);

  const closeTable = useCallback(() => {
    setSession(null);
    const el = lastFocus.current;
    if (el && el.focus) requestAnimationFrame(() => el.focus());
  }, []);

  return (
    <>
      <div className="wrap">
        <Hero />
        <Rules />

        <section>
          <div className="themes-head">
            <div>
              <h2>Os dez temas</h2>
              <p className="sub">
                Nove cartas em cada um. Toque numa cor para começar.
              </p>
            </div>
            <button className="btn solid" type="button" onClick={openDestino}>
              <span className="dice" aria-hidden="true">
                ✦
              </span>{" "}
              Deixe o destino escolher
            </button>
          </div>

          <ThemeGrid seenCount={seenCount} onOpen={openTheme} />
        </section>

        <footer>
          <span>
            Baralho 10 Dates para se Conectar — 90 cartas em proporção 63 × 88 mm
          </span>
          <span>
            <button className="back" type="button" onClick={reset}>
              Zerar progresso
            </button>
          </span>
        </footer>
      </div>

      {session && (
        <GameTable
          key={session.label + session.deck.length}
          session={session}
          onClose={closeTable}
          onSeen={markSeen}
        />
      )}
    </>
  );
}
