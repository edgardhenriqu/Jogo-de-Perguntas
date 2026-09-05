import { useEffect, useRef } from "react";

export default function FinalRound({ onAgain, onRedraw, restam }) {
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

      <div className="final-acts">
        {onRedraw && (
          <button type="button" className="btn solid" ref={btnRef} onClick={onRedraw}>
            <span className="dice" aria-hidden="true">
              ✦
            </span>{" "}
            Sortear outras dez
          </button>
        )}
        <button
          type="button"
          className="btn"
          ref={onRedraw ? null : btnRef}
          onClick={onAgain}
        >
          Escolher outro tema
        </button>
      </div>

      {onRedraw && (
        <p className="sub">
          {restam
            ? `Sem repetir: ainda faltam ${restam} cartas`
            : "As 90 cartas já saíram — daqui em diante o baralho recomeça"}
        </p>
      )}
    </div>
  );
}
