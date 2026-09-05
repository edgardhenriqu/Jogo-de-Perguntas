import { useCallback, useEffect, useRef, useState } from "react";

const SEGURAR = 1200;
const TOLERANCIA = 16;

export default function Hero({ onSecret }) {
  const timer = useRef(null);
  const origem = useRef(null);
  const [segurando, setSegurando] = useState(false);

  const stop = useCallback(() => {
    clearTimeout(timer.current);
    origem.current = null;
    setSegurando(false);
  }, []);

  /* segurar o titulo revela o baralho 11; a linha embaixo mostra quanto falta */
  const start = useCallback(
    (e) => {
      clearTimeout(timer.current);
      origem.current = { x: e.clientX, y: e.clientY };
      setSegurando(true);
      timer.current = setTimeout(() => {
        stop();
        onSecret();
      }, SEGURAR);
    },
    [onSecret, stop]
  );

  /* dedo tremendo nao cancela: so um movimento de verdade, que e rolagem */
  const move = useCallback(
    (e) => {
      const o = origem.current;
      if (!o) return;
      const longe =
        Math.abs(e.clientX - o.x) > TOLERANCIA ||
        Math.abs(e.clientY - o.y) > TOLERANCIA;
      if (longe) stop();
    },
    [stop]
  );

  useEffect(() => () => clearTimeout(timer.current), []);

  return (
    <header className="hero">
      <div>
        <p className="eyebrow">Baralho para casais · 10 temas · 90 cartas</p>
        <h1
          className={"hero-mark" + (segurando ? " holding" : "")}
          onPointerDown={start}
          onPointerMove={move}
          onPointerUp={stop}
          onPointerLeave={stop}
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
