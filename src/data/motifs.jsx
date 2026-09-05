/**
 * Motivos ilustrados das cartas — desenho de linha, grade de 48x48.
 * Cada figura herda a cor do tema via currentColor.
 * O motivo de cada pergunta esta em src/data/cardArt.js.
 */
export const MOTIFS = {
  /* ---------- sobre voce e sobre mim ---------- */
  prato: (
    <>
      <circle cx="24" cy="24" r="10" />
      <circle cx="24" cy="24" r="5.5" />
      <path d="M10 9v8a2.5 2.5 0 0 0 5 0V9M12.5 19.5V40" />
      <ellipse cx="36" cy="14" rx="3" ry="5.5" />
      <path d="M36 19.5V40" />
    </>
  ),
  espelho: (
    <>
      <ellipse cx="24" cy="19" rx="12" ry="14" />
      <ellipse cx="24" cy="19" rx="8" ry="10" />
      <path d="M24 33v7M15 41h18" />
    </>
  ),
  duo: (
    <>
      <circle cx="19" cy="24" r="9.5" />
      <circle cx="29" cy="24" r="9.5" />
    </>
  ),
  livro: (
    <>
      <path d="M24 14v22" />
      <path d="M24 14c-3-2.6-7-3.8-12-3.8v20c5 0 9 1.2 12 3.8" />
      <path d="M24 14c3-2.6 7-3.8 12-3.8v20c-5 0-9 1.2-12 3.8" />
    </>
  ),
  paleta: (
    <>
      <path d="M24 9c-8.3 0-15 6-15 13.5S15.7 34 21 34c2 0 3 1.2 3 2.8s1.2 2.7 3 2.7c6.6 0 12-5.6 12-13S32.3 9 24 9z" />
      <circle cx="16.5" cy="20" r="1.7" fill="currentColor" stroke="none" />
      <circle cx="24" cy="16.5" r="1.7" fill="currentColor" stroke="none" />
      <circle cx="31.5" cy="20" r="1.7" fill="currentColor" stroke="none" />
    </>
  ),
  xicara: (
    <>
      <path d="M12 19h20v8a9 9 0 0 1-9 9h-2a9 9 0 0 1-9-9z" />
      <path d="M32 22h3a4 4 0 0 1 0 8h-3" />
      <path d="M19 8c-1.6 2.2 1.6 3.4 0 5.6M26 8c-1.6 2.2 1.6 3.4 0 5.6" />
      <path d="M11 40h24" />
    </>
  ),
  bussola: (
    <>
      <circle cx="24" cy="24" r="14.5" />
      <path d="M30.5 17.5L26 26l-8.5 4.5L22 22z" />
    </>
  ),
  estrela: (
    <>
      <path d="M22 8l3.2 8.8L34 20l-8.8 3.2L22 32l-3.2-8.8L10 20l8.8-3.2z" />
      <path d="M36 30l1.4 3.6 3.6 1.4-3.6 1.4L36 40l-1.4-3.6L31 35l3.6-1.4z" />
    </>
  ),
  lista: (
    <>
      <rect x="11" y="11" width="26" height="29" rx="3" />
      <path d="M19 11V9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
      <path d="M16 21l2.4 2.4L23 18M16 31l2.4 2.4L23 28M27 21h6M27 31h6" />
    </>
  ),

  /* ---------- metas, sonhos e futuro ---------- */
  balao: (
    <>
      <path d="M24 7c-6.9 0-12.5 5.5-12.5 12.3 0 6.2 5.1 11.5 8.5 14.2h8c3.4-2.7 8.5-8 8.5-14.2C36.5 12.5 30.9 7 24 7z" />
      <path d="M16 11.5c-1.8 5-1.8 13 1.7 22M32 11.5c1.8 5 1.8 13-1.7 22" />
      <path d="M20.5 33.5l1 6.5h5l1-6.5" />
    </>
  ),
  ampulheta: (
    <>
      <path d="M14 8h20M14 40h20" />
      <path d="M17 8v4.5c0 4 7 7.5 7 11.5s-7 7.5-7 11.5V40M31 8v4.5c0 4-7 7.5-7 11.5s7 7.5 7 11.5V40" />
      <path d="M20 33c1.5-2 2.7-3 4-3s2.5 1 4 3" />
    </>
  ),
  escada: (
    <>
      <path d="M6 40h9v-9h9v-9h9v-9h9" />
      <path d="M37 13V5M33 9l4-4 4 4" />
    </>
  ),
  alvo: (
    <>
      <circle cx="22" cy="26" r="13" />
      <circle cx="22" cy="26" r="7" />
      <circle cx="22" cy="26" r="1.8" fill="currentColor" stroke="none" />
      <path d="M22 26L40 8M33 8h7v7" />
    </>
  ),
  maos: (
    <>
      <path d="M8 22v5c0 7.7 7.2 14 16 14s16-6.3 16-14v-5" />
      <path d="M14 22v4M34 22v4" />
      <path d="M24 5v13M19 10l5-5 5 5" />
    </>
  ),
  montanha: (
    <>
      <path d="M4 37l13-19 7 10 5-7 15 16z" />
      <path d="M13 30l4 2.5 4-2.5" />
      <path d="M36 27V11l7 2.5-7 2.5" />
    </>
  ),
  chama: (
    <>
      <path d="M24 41c6.3 0 11.5-4.8 11.5-11.2C35.5 21 27 18 29 8c-6.5 2-16 9.6-16 19.5C13 34.5 17.4 41 24 41z" />
      <path d="M24 41c2.9 0 5.2-2.3 5.2-5.2 0-3.5-3.2-4.6-2.6-8.3-2.6 1.5-4.7 4.2-4.7 7.7 0 3.3 1 5.8 2.1 5.8z" />
    </>
  ),
  arvore: (
    <>
      <circle cx="24" cy="17" r="10.5" />
      <path d="M24 41V20" />
      <path d="M24 29l-6-5M24 33l6-5" />
      <path d="M17 41h14" />
    </>
  ),

  /* ---------- sexo e intimidade ---------- */
  pulso: (
    <>
      <path d="M24 39S8 29 8 19.5C8 14.3 12 10 17 10c3.1 0 5.6 1.7 7 3.6C25.4 11.7 27.9 10 31 10c5 0 9 4.3 9 9.5C40 29 24 39 24 39z" />
      <path d="M12 21h6l3-5 4 10 3-5h8" />
    </>
  ),
  cama: (
    <>
      <path d="M6 38V13" />
      <path d="M6 26h36v12" />
      <rect x="11" y="19" width="11" height="7" rx="3.5" />
      <path d="M4 38h40" />
    </>
  ),
  calendario: (
    <>
      <rect x="8" y="12" width="32" height="28" rx="3" />
      <path d="M8 21h32M17 8v7M31 8v7" />
      <circle cx="24" cy="30" r="3.4" fill="currentColor" stroke="none" />
    </>
  ),
  no: (
    <path d="M24 24c3-5.2 5.6-7.8 9.8-7.8A7.8 7.8 0 0 1 41.5 24a7.8 7.8 0 0 1-7.7 7.8c-4.2 0-6.8-2.6-9.8-7.8-3-5.2-5.6-7.8-9.8-7.8A7.8 7.8 0 0 0 6.5 24a7.8 7.8 0 0 0 7.7 7.8c4.2 0 6.8-2.6 9.8-7.8z" />
  ),
  cadeado: (
    <>
      <rect x="10" y="21" width="28" height="19" rx="4" />
      <path d="M17 21v-5.5a7 7 0 0 1 14 0V21" />
      <circle cx="24" cy="29" r="2.6" />
      <path d="M24 31.6V34.5" />
    </>
  ),
  chave: (
    <>
      <circle cx="16" cy="20" r="8" />
      <circle cx="16" cy="20" r="2.6" />
      <path d="M21.5 25.5L37 41M32 36l-3.5 3.5M36.5 40.5L40 37" />
    </>
  ),
  faisca: (
    <>
      <path d="M17 7l2.7 6.8 6.8 2.7-6.8 2.7L17 26l-2.7-6.8-6.8-2.7 6.8-2.7z" />
      <path d="M33 22l1.8 4.5 4.5 1.8-4.5 1.8L33 34.6l-1.8-4.5-4.5-1.8 4.5-1.8z" />
      <path d="M15 32l1.2 3.2 3.2 1.2-3.2 1.2L15 41l-1.2-3.4-3.2-1.2 3.2-1.2z" />
    </>
  ),

  /* ---------- trabalho e dinheiro ---------- */
  trofeu: (
    <>
      <path d="M16 8h16v10a8 8 0 0 1-16 0z" />
      <path d="M16 11h-5v3.5a6.5 6.5 0 0 0 6.5 6.5M32 11h5v3.5a6.5 6.5 0 0 1-6.5 6.5" />
      <path d="M24 26v6" />
      <path d="M17.5 40l1.5-8h10l1.5 8z" />
    </>
  ),
  moeda: (
    <>
      <ellipse cx="24" cy="14" rx="13" ry="5.2" />
      <path d="M11 14v8.5c0 2.9 5.8 5.2 13 5.2s13-2.3 13-5.2V14" />
      <path d="M11 22.5V31c0 2.9 5.8 5.2 13 5.2s13-2.3 13-5.2v-8.5" />
    </>
  ),
  balanca: (
    <>
      <path d="M24 9v30M16 39h16" />
      <path d="M8 15l16-4 16 4" />
      <path d="M2 22a6 6 0 0 0 12 0zM34 22a6 6 0 0 0 12 0z" />
      <path d="M8 15v7M40 15v7" />
    </>
  ),
  cofre: (
    <>
      <rect x="7" y="9" width="34" height="29" rx="4" />
      <circle cx="24" cy="23.5" r="7.5" />
      <path d="M24 16v3.5M24 27.5V31M16.5 23.5H20M28 23.5h3.5" />
      <path d="M13 38v4M35 38v4" />
    </>
  ),
  sacola: (
    <>
      <path d="M10.5 16h27l-2.6 24H13.1z" />
      <path d="M18 16v-3.5a6 6 0 0 1 12 0V16" />
    </>
  ),
  grafico: (
    <>
      <path d="M9 8v31h32" />
      <path d="M14 32l7.5-8.5 6 5L38 14" />
      <path d="M31.5 14H38v6.5" />
    </>
  ),

  /* ---------- comunicacao e conflitos ---------- */
  fala: (
    <>
      <path d="M5 12a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v7a4 4 0 0 1-4 4H14l-6 5v-5a3 3 0 0 1-3-3z" />
      <path d="M43 27a4 4 0 0 0-4-4H25a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h9l6 5v-5a3 3 0 0 0 3-3z" />
    </>
  ),
  ponte: (
    <>
      <path d="M4 29c9.5 0 9.5-12 20-12s10.5 12 20 12" />
      <path d="M4 37h40" />
      <path d="M12 26.5V37M24 17v20M36 26.5V37" />
    </>
  ),
  riso: (
    <>
      <circle cx="24" cy="24" r="15" />
      <path d="M16 27c2 3.4 4.7 5.2 8 5.2s6-1.8 8-5.2" />
      <path d="M17 19c1-1.4 2.6-1.4 3.6 0M27.4 19c1-1.4 2.6-1.4 3.6 0" />
    </>
  ),
  porta: (
    <>
      <path d="M8 41h32" />
      <rect x="13" y="6" width="22" height="35" rx="2" />
      <rect x="17.5" y="11" width="13" height="17" rx="1" />
      <circle cx="30" cy="34" r="1.7" fill="currentColor" stroke="none" />
    </>
  ),
  raio: <path d="M28 5L12 27h9.5l-2.5 16 17-23H26z" />,
  ondas: (
    <>
      <path d="M5 18c4-6.5 8-6.5 12 0s8 6.5 12 0 8-6.5 12 0" />
      <path d="M5 32c4-6.5 8-6.5 12 0s8 6.5 12 0 8-6.5 12 0" />
    </>
  ),
  guardachuva: (
    <>
      <path d="M4 26a20 20 0 0 1 40 0z" />
      <path d="M24 26v11a5.5 5.5 0 0 1-11 0" />
      <path d="M24 3v3" />
    </>
  ),
  retorno: (
    <>
      <path d="M39 24A15 15 0 1 1 33.5 12.4" />
      <path d="M40 6.5V15h-8.5" />
      <path d="M24 16v8.5l6 3.5" />
    </>
  ),

  /* ---------- tempo, limites e compatibilidade ---------- */
  broto: (
    <>
      <path d="M24 41V22" />
      <path d="M24 27c0-6.5-4.4-9.8-11-9.8 0 6.5 4.4 9.8 11 9.8z" />
      <path d="M24 22c0-6.5 4.4-10.5 11-10.5 0 6.5-4.4 10.5-11 10.5z" />
    </>
  ),
  cerca: (
    <>
      <path d="M5 20h38M5 29h38" />
      <path d="M12 41V14l3.5-4.5L19 14v27M29 41V14l3.5-4.5L36 14v27" />
    </>
  ),
  presente: (
    <>
      <rect x="9" y="19" width="30" height="21" rx="2" />
      <rect x="6" y="12" width="36" height="7" rx="2" />
      <path d="M24 12v28" />
      <path d="M24 12c-3.5-6.5-12-8-12-2.5 0 3 6.5 3 12 2.5zM24 12c3.5-6.5 12-8 12-2.5 0 3-6.5 3-12 2.5z" />
    </>
  ),
  casa: (
    <>
      <path d="M7 22L24 8l17 14" />
      <path d="M11 20v20h26V20" />
      <path d="M20 40V28h8v12" />
    </>
  ),
  bolo: (
    <>
      <path d="M10 37V28c0-2.2 1.8-4 4-4h20c2.2 0 4 1.8 4 4v9z" />
      <path d="M10 30.5c2.5 0 2.5 2.5 5 2.5s2.5-2.5 5-2.5 2.5 2.5 5 2.5 2.5-2.5 5-2.5 2.5 2.5 5 2.5 2.5-2.5 3-2.5" />
      <path d="M24 24v-4" />
      <path d="M24 12.5c1.7 1.6 2.6 2.9 2.6 4a2.6 2.6 0 0 1-5.2 0c0-1.1.9-2.4 2.6-4z" />
      <path d="M7 41h34" />
    </>
  ),
  relogio: (
    <>
      <circle cx="24" cy="24" r="15" />
      <path d="M24 14v10.5l7 4" />
    </>
  ),
  grupo: (
    <>
      <circle cx="24" cy="16" r="5.5" />
      <path d="M15 33c0-5 4-8.5 9-8.5s9 3.5 9 8.5" />
      <circle cx="9.5" cy="21" r="4" />
      <path d="M3 35c0-4.2 2.8-6.8 6.5-6.8" />
      <circle cx="38.5" cy="21" r="4" />
      <path d="M45 35c0-4.2-2.8-6.8-6.5-6.8" />
    </>
  ),
  solo: (
    <>
      <circle cx="24" cy="16" r="6.5" />
      <path d="M12 39c0-6.6 5.4-12 12-12s12 5.4 12 12" />
    </>
  ),

  /* ---------- saude e estilo de vida ---------- */
  maca: (
    <>
      <path d="M24 16c8-6.5 16-.5 16 8.5 0 8-6 16.5-10.5 15.5-2-.5-3.5-1-5.5-1s-3.5.5-5.5 1C14 41 8 32.5 8 24.5 8 15.5 16 9.5 24 16z" />
      <path d="M24 16V9" />
      <path d="M24 11.5c2.2-3.4 5.4-4.4 8.5-3.6" />
    </>
  ),
  taca: (
    <>
      <path d="M15 8h18l-2 12.5a7 7 0 0 1-14 0z" />
      <path d="M16.2 16h15.6" />
      <path d="M24 27.5V38M17 40h14" />
    </>
  ),
  lotus: (
    <>
      <path d="M24 39c-5.5 0-10-4.8-10-10.7 0-6 4.5-11 10-16.3 5.5 5.3 10 10.3 10 16.3 0 5.9-4.5 10.7-10 10.7z" />
      <path d="M24 39c-8.5 0-15-5.2-15-11.6 3.2-1.7 6.6-1.5 9.4.6M24 39c8.5 0 15-5.2 15-11.6-3.2-1.7-6.6-1.5-9.4.6" />
    </>
  ),
  bike: (
    <>
      <circle cx="11.5" cy="31" r="8" />
      <circle cx="36.5" cy="31" r="8" />
      <path d="M11.5 31l8-13h9l-6.5 13h14.5" />
      <path d="M17 18h7M28.5 18l4.5 8" />
    </>
  ),

  /* ---------- respeito e compromisso ---------- */
  escudo: (
    <>
      <path d="M24 6l15 5.5v11.5c0 9.5-6.4 16-15 19-8.6-3-15-9.5-15-19V11.5z" />
      <path d="M18 24l4.2 4.2L30.5 19" />
    </>
  ),
  bifurcacao: (
    <>
      <path d="M24 42V27" />
      <path d="M24 27l-9-9V9M24 27l9-9V9" />
      <path d="M11 13l4-4 4 4M29 13l4-4 4 4" />
    </>
  ),
  pipa: (
    <>
      <path d="M24 5l13 13-13 19-13-19z" />
      <path d="M11 18h26M24 5v32" />
      <path d="M24 37c-3.5 2.5 3.5 5 0 7.5" />
    </>
  ),
  "coracao-partido": (
    <>
      <path d="M24 39S8 29 8 19.5C8 14.3 12 10 17 10c3.1 0 5.6 1.7 7 3.6C25.4 11.7 27.9 10 31 10c5 0 9 4.3 9 9.5C40 29 24 39 24 39z" />
      <path d="M24 13.6l-4.5 8.4 7.5 3.5-4 6.5" />
    </>
  ),
  selo: (
    <>
      <circle cx="24" cy="18" r="11" />
      <circle cx="24" cy="18" r="5.5" />
      <path d="M17.5 27.5L14 43l10-5.5L34 43l-3.5-15.5" />
    </>
  ),

  /* ---------- date surpresa ---------- */
  sol: (
    <>
      <circle cx="24" cy="24" r="9.5" />
      <path d="M24 4v5.5M24 38.5V44M4 24h5.5M38.5 24H44M9.9 9.9l3.9 3.9M34.2 34.2l3.9 3.9M38.1 9.9l-3.9 3.9M13.8 34.2l-3.9 3.9" />
    </>
  ),
  dado: (
    <>
      <rect x="8" y="8" width="32" height="32" rx="6" />
      <circle cx="17" cy="17" r="2.1" fill="currentColor" stroke="none" />
      <circle cx="31" cy="17" r="2.1" fill="currentColor" stroke="none" />
      <circle cx="24" cy="24" r="2.1" fill="currentColor" stroke="none" />
      <circle cx="17" cy="31" r="2.1" fill="currentColor" stroke="none" />
      <circle cx="31" cy="31" r="2.1" fill="currentColor" stroke="none" />
    </>
  ),
  pergunta: (
    <>
      <path d="M41 28a5 5 0 0 1-5 5H19l-9 7V13a5 5 0 0 1 5-5h21a5 5 0 0 1 5 5z" />
      <path d="M20.5 17.5a5 5 0 0 1 9 2c0 3.2-4.5 3.6-4.5 6.5" />
      <circle cx="25" cy="29.5" r="1.3" fill="currentColor" stroke="none" />
    </>
  ),
  festa: (
    <>
      <path d="M4 12c13-5.5 27-5.5 40 0" />
      <path d="M7.5 10.7L14 9.2 10.5 18zM15.5 9L22 8.3 18.5 17.2zM23 8.3L29.5 8.7 26 17.5zM30.5 9.2L37 10.8 33.5 19.2z" />
      <path d="M13 31l1.1 3.1 3.1 1.1-3.1 1.1L13 39.4l-1.1-3.1-3.1-1.1 3.1-1.1zM34 29l1.1 3.1 3.1 1.1-3.1 1.1L34 37.4l-1.1-3.1-3.1-1.1 3.1-1.1z" />
    </>
  ),
  telefone: (
    <>
      <rect x="13" y="5" width="22" height="38" rx="4" />
      <path d="M20.5 10h7" />
      <circle cx="24" cy="36" r="2" />
    </>
  ),
  envelope: (
    <>
      <rect x="6" y="12" width="36" height="25" rx="3" />
      <path d="M6 15.5l18 12.5 18-12.5" />
    </>
  ),
  mala: (
    <>
      <rect x="6" y="15" width="36" height="24" rx="4" />
      <path d="M17 15v-3.5a3.5 3.5 0 0 1 3.5-3.5h7a3.5 3.5 0 0 1 3.5 3.5V15" />
      <path d="M6 25h36" />
    </>
  ),

  /* ---------- nossa historia ---------- */
  coracao: (
    <path d="M24 39S8 29 8 19.5C8 14.3 12 10 17 10c3.1 0 5.6 1.7 7 3.6C25.4 11.7 27.9 10 31 10c5 0 9 4.3 9 9.5C40 29 24 39 24 39z" />
  ),
  globo: (
    <>
      <circle cx="24" cy="24" r="15" />
      <path d="M24 9c4 4.2 6 9.4 6 15s-2 10.8-6 15c-4-4.2-6-9.4-6-15s2-10.8 6-15z" />
      <path d="M9.6 19h28.8M9.6 29h28.8" />
    </>
  ),
  lampada: (
    <>
      <path d="M17 30a11.5 11.5 0 1 1 14 0c-1.6 1.3-2.2 2.8-2.2 4.8h-9.6c0-2-.6-3.5-2.2-4.8z" />
      <path d="M19 38.5h10M20.5 42.5h7" />
    </>
  )
};
