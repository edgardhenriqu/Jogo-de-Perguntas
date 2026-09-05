import { useCallback, useEffect, useRef, useState } from "react";
import { ALL_DECKS } from "../data/themes.js";
import { ART } from "../data/cardArt.js";
import { shuffled } from "../utils.js";
import Card3D from "./Card3D.jsx";
import Controls from "./Controls.jsx";
import FinalRound from "./FinalRound.jsx";

/**
 * A mesa de jogo: overlay em tela cheia com a carta atual,
 * navegacao entre as cartas do baralho e a rodada final.
 */
export default function GameTable({ session, onClose, onSeen, onRedraw, restam }) {
  const [deck, setDeck] = useState(session.deck);
  const [pos, setPos] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const backRef = useRef(null);

  const finished = pos >= deck.length;
  const current = finished ? null : deck[pos];
  const theme = current ? ALL_DECKS[current.t] : null;

  /* trava o scroll da pagina enquanto a mesa esta aberta */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  /* toda carta comeca virada para baixo */
  useEffect(() => {
    setFlipped(false);
  }, [pos, deck]);

  /* foco inicial no verso da carta */
  useEffect(() => {
    if (backRef.current) backRef.current.focus();
  }, []);

  const reveal = useCallback(() => {
    if (finished || flipped) return;
    setFlipped(true);
    onSeen(deck[pos].t, deck[pos].i);
  }, [finished, flipped, deck, pos, onSeen]);

  const next = useCallback(() => {
    setPos((p) => (p < deck.length ? p + 1 : p));
  }, [deck.length]);

  const prev = useCallback(() => {
    setPos((p) => (p > 0 ? p - 1 : p));
  }, []);

  const shuffle = useCallback(() => {
    setDeck((d) => shuffled(d));
    setPos(0);
  }, []);

  /* arrastar para o lado troca de carta (celular) */
  const touchStart = useRef(null);

  function onTouchStart(e) {
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  }

  function onTouchEnd(e) {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - start.x;
    const dy = t.clientY - start.y;
    /* precisa ser um gesto horizontal claro, para nao competir com o scroll */
    if (Math.abs(dx) < 50 || Math.abs(dx) < Math.abs(dy) * 1.5) return;
    if (dx < 0) next();
    else prev();
  }

  /* atalhos de teclado */
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === " " && e.target === document.body) {
        e.preventDefault();
        reveal();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose, next, prev, reveal]);

  return (
    <div className="table">
      <div className="table-bar">
        <button className="back" type="button" onClick={onClose}>
          ← Voltar à mesa
        </button>
        <span className="who">{session.label}</span>
        <button className="back" type="button" onClick={shuffle}>
          Embaralhar ↺
        </button>
      </div>

      <div className="stage" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        {finished ? (
          <FinalRound onAgain={onClose} onRedraw={onRedraw} restam={restam} />
        ) : (
          <>
            <Card3D
              theme={theme}
              cardIndex={current.i}
              question={theme.cards[current.i]}
              art={ART[current.t][current.i]}
              flipped={flipped}
              onReveal={reveal}
              backRef={backRef}
            />
            <Controls
              total={deck.length}
              pos={pos}
              color={theme.c}
              onPrev={prev}
              onNext={next}
              onJump={setPos}
            />
          </>
        )}
      </div>
    </div>
  );
}
