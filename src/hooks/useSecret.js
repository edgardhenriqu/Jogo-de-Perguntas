import { useCallback, useEffect, useState } from "react";

const KEY = "dates10.secret.v1";

function load() {
  try {
    return localStorage.getItem(KEY) === "1";
  } catch (e) {
    return false;
  }
}

/** O baralho 11 fica escondido ate ser desbloqueado; a escolha persiste. */
export function useSecret() {
  const [on, setOn] = useState(load);

  useEffect(() => {
    try {
      localStorage.setItem(KEY, on ? "1" : "0");
    } catch (e) {
      /* modo privado: vale so para esta sessao */
    }
  }, [on]);

  const unlock = useCallback(() => setOn(true), []);
  const lock = useCallback(() => setOn(false), []);

  return { on, unlock, lock };
}
