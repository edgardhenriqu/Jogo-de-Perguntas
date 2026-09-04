import { useEffect, useRef } from "react";

export default function FinalRound({ onAgain }) {
  const btnRef = useRef(null);

  useEffect(() => {
    if (btnRef.current) btnRef.current.focus();
  }, []);

  return (
    <div className="final">
      <p className="eyebrow">Rodada final</p>
      <h2>Como vocês se sentiram?</h2>
      <p className="quiet">
        O que descobriram um sobre o outro? Como se sentem agora?
      </p>
      <p>Aproveitem essa oportunidade para se reconhecerem e se amarem.</p>
      <button type="button" className="btn" ref={btnRef} onClick={onAgain}>
        Escolher outro tema
      </button>
    </div>
  );
}
