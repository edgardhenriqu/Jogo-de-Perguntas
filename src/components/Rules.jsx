const RULES = [
  {
    eyebrow: "Como jogar",
    title: "Escolham o tema",
    text: "Selecionem o tema que precisa de mais atenção — ou deixem nas mãos do destino, tirando uma carta de cada cor."
  },
  {
    eyebrow: "Onde jogar",
    title: "Façam um date",
    text: "Com um vinho, depois de um jantar com receita nova, num piquenique. O lugar não importa: importa que nada tire o foco de vocês."
  },
  {
    eyebrow: "Durante o jogo",
    title: "Sem pressa",
    text: "Um lê a pergunta em voz alta e os dois respondem. Deem espaço para cada um explorar seus pensamentos e emoções."
  },
  {
    eyebrow: "Rodada final",
    title: "Contem como foi",
    text: "No fim do date, compartilhem o que descobriram um sobre o outro e como se sentem agora."
  }
];

export default function Rules() {
  return (
    <section className="rules">
      {RULES.map((r) => (
        <div className="rule" key={r.title}>
          <p className="eyebrow">{r.eyebrow}</p>
          <h3>{r.title}</h3>
          <p>{r.text}</p>
        </div>
      ))}
    </section>
  );
}
