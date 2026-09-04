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
