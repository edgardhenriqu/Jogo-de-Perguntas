import { MOTIFS } from "../data/motifs.jsx";

/** Desenha o motivo da carta na cor herdada do elemento pai. */
export default function Motif({ name }) {
  const art = MOTIFS[name];
  if (!art) return null;

  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {art}
    </svg>
  );
}
