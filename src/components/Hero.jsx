import { useCallback, useRef } from "react";

const SEGURAR = 2000;

export default function Hero({ onSecret }) {
  const timer = useRef(null);

  /* segurar o titulo por dois segundos revela o baralho 11 */
  const start = useCallback(() => {
    clearTimeout(timer.current);
    timer.current = setTimeout(onSecret, SEGURAR);
  }, [onSecret]);

  const stop = useCallback(() => clearTimeout(timer.current), []);

  return (
    <header className="hero">
      <div>
        <p className="eyebrow">Baralho para casais · 10 temas · 90 cartas</p>
        <h1
          className="hero-mark"
          onPointerDown={start}
          onPointerUp={stop}
          onPointerLeave={stop}
          onPointerCancel={stop}
          onContextMenu={(e) => e.preventDefault()}
        >
          10 dates<em>para se conectar</em>
        </h1>
        <p className="lede">
          Mais que um jogo, uma jornada de descoberta. Cada carta é uma
          oportunidade de mergulhar no que faz o amor durar:{" "}
          <strong>a conexão entre duas pessoas.</strong>
        </p>
      </div>
      <div className="fan" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
        <span>Escolham uma cor</span>
      </div>
    </header>
  );
}
