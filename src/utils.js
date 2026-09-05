import { THEMES } from "./data/themes.js";

/** Formata numeros de carta: 1 -> "01". */
export function pad(n) {
  return (n < 10 ? "0" : "") + n;
}

/** Gradiente do verso da carta, derivado da cor do tema. */
export function deckBg(hex) {
  return (
    "linear-gradient(158deg, color-mix(in oklab, " +
    hex +
    " 80%, var(--deck-mix)), color-mix(in oklab, " +
    hex +
    " 40%, var(--deck-mix)))"
  );
}

/** Fisher-Yates sobre uma copia do baralho. */
export function shuffled(deck) {
  var out = deck.slice();
  for (var i = out.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = out[i];
    out[i] = out[j];
    out[j] = tmp;
  }
  return out;
}

/** Indices das cartas de um tema que ainda nao foram reveladas. */
function livres(temaIdx, seen) {
  var vistas = seen[temaIdx] || [];
  var out = [];
  for (var i = 0; i < THEMES[temaIdx].cards.length; i++) {
    if (vistas.indexOf(i) === -1) out.push(i);
  }
  return out;
}

/** Quantas cartas do baralho inteiro ainda nao sairam. */
export function ineditas(seen) {
  var n = 0;
  for (var t = 0; t < THEMES.length; t++) n += livres(t, seen).length;
  return n;
}

/**
 * Baralho do destino: uma carta inedita de cada tema, na ordem sorteada.
 * Um tema que ja acabou volta a valer inteiro, para o jogo nunca travar.
 */
export function destinoDeck(seen) {
  var out = [];
  for (var t = 0; t < THEMES.length; t++) {
    var opcoes = livres(t, seen);
    if (!opcoes.length) {
      for (var i = 0; i < THEMES[t].cards.length; i++) opcoes.push(i);
    }
    out.push({ t: t, i: opcoes[Math.floor(Math.random() * opcoes.length)] });
  }
  return shuffled(out);
}
