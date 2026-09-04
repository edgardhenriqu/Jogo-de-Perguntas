import { useCallback, useEffect, useState } from "react";

const KEY = "dates10.progress.v1";

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    const o = raw ? JSON.parse(raw) : {};
    return o && typeof o === "object" ? o : {};
  } catch (e) {
    return {};
  }
}

/**
 * Progresso das cartas ja vistas, por tema: { [temaIdx]: [cartaIdx, ...] }.
 * Persiste em localStorage com a mesma chave da versao HTML.
 */
export function useProgress() {
  const [seen, setSeen] = useState(load);

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(seen));
    } catch (e) {
      /* modo privado / storage cheio: segue sem persistir */
    }
  }, [seen]);

  const markSeen = useCallback((theme, card) => {
    setSeen((prev) => {
      const list = prev[theme] || [];
      if (list.indexOf(card) !== -1) return prev;
      return { ...prev, [theme]: list.concat(card) };
    });
  }, []);

  const reset = useCallback(() => setSeen({}), []);

  const seenCount = useCallback((theme) => (seen[theme] || []).length, [seen]);

  return { seen, markSeen, reset, seenCount };
}
