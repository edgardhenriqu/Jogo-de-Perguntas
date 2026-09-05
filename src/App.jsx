import { useCallback, useEffect, useRef, useState } from "react";
import { ALL_DECKS, THEMES } from "./data/themes.js";
import { destinoDeck, ineditas } from "./utils.js";
import { useProgress } from "./hooks/useProgress.js";
import { useSecret } from "./hooks/useSecret.js";
import Hero from "./components/Hero.jsx";
import Rules from "./components/Rules.jsx";
import ThemeGrid from "./components/ThemeGrid.jsx";
import GameTable from "./components/GameTable.jsx";

const TOTAL = THEMES.reduce((n, t) => n + t.cards.length, 0);
const DESTINO = "Destino — dez cartas ao acaso";

export default function App() {
  const { seen, markSeen, reset, seenCount } = useProgress();
  const secret = useSecret();
  const [session, setSession] = useState(null);
  const [flash, setFlash] = useState("");
  const lastFocus = useRef(null);

  const restam = ineditas(seen);

  /* o aviso do baralho 11 some sozinho */
  useEffect(() => {
    if (!flash) return;
    const id = setTimeout(() => setFlash(""), 3200);
    return () => clearTimeout(id);
  }, [flash]);

  const openTheme = useCallback((idx) => {
    lastFocus.current = document.activeElement;
    setSession({
      id: Date.now(),
      label: ALL_DECKS[idx].name,
      deck: ALL_DECKS[idx].cards.map((_, i) => ({ t: idx, i }))
    });
  }, []);

  /* novo sorteio: nunca repete uma carta que ja foi revelada */
  const sortear = useCallback(() => {
    setSession({
      id: Date.now(),
      label: DESTINO,
      destino: true,
      deck: destinoDeck(seen)
    });
  }, [seen]);

  const openDestino = useCallback(() => {
    lastFocus.current = document.activeElement;
    sortear();
  }, [sortear]);

  const closeTable = useCallback(() => {
    setSession(null);
    const el = lastFocus.current;
    if (el && el.focus) requestAnimationFrame(() => el.focus());
  }, []);

  /* o mesmo gesto vai e volta: segurar de novo devolve a mesa aos dez temas */
  const onSecret = useCallback(() => {
    if (secret.on) {
      secret.lock();
      setFlash("A mesa voltou aos dez temas.");
      return;
    }
    secret.unlock();
    setFlash("Baralho 11 desbloqueado — está no fim da mesa.");
  }, [secret]);

  const hideSecret = useCallback(() => {
    secret.lock();
    setFlash("A mesa voltou aos dez temas.");
  }, [secret]);

  return (
    <>
      <div className="wrap">
        <Hero onSecret={onSecret} />
        <Rules />

        <section>
          <div className="themes-head">
            <div>
              <h2>Os dez temas</h2>
              <p className="sub">
                Nove cartas em cada um. Toque numa cor para começar.
              </p>
            </div>
            <div className="destino">
              <button className="btn solid" type="button" onClick={openDestino}>
                <span className="dice" aria-hidden="true">
                  ✦
                </span>{" "}
                Deixe o destino escolher
              </button>
              <p className="sub">
                {restam
                  ? `${restam} de ${TOTAL} cartas ainda não saíram`
                  : "As 90 cartas já saíram — o baralho recomeça"}
              </p>
            </div>
          </div>

          <ThemeGrid seenCount={seenCount} secret={secret.on} onOpen={openTheme} />
        </section>

        <footer>
          <span>
            Baralho 10 Dates para se Conectar — 90 cartas em proporção 63 × 88 mm
          </span>
          <span>
            {secret.on && (
              <button className="back" type="button" onClick={hideSecret}>
                Esconder o baralho 11
              </button>
            )}{" "}
            <button className="back" type="button" onClick={reset}>
              Zerar progresso
            </button>
          </span>
        </footer>
      </div>

      {flash && (
        <p className="flash" role="status">
          {flash}
        </p>
      )}

      {session && (
        <GameTable
          key={session.id}
          session={session}
          onClose={closeTable}
          onSeen={markSeen}
          onRedraw={session.destino ? sortear : null}
          restam={restam}
        />
      )}
    </>
  );
}
