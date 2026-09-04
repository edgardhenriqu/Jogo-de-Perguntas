# 10 Dates para se Conectar — versão React

Baralho digital para casais: 10 temas, 9 cartas em cada um (90 no total).

## Rodar em desenvolvimento

```bash
npm install
npm run dev
```

Abre em http://localhost:5173

## Testar no celular (mesma rede Wi-Fi)

```bash
npm run dev:celular
```

O Vite mostra um endereço "Network" (ex.: http://192.168.0.12:5173).
Abra esse endereço no navegador do celular — o PC e o celular precisam estar
na mesma rede. Se não abrir, libere a porta no firewall do Windows.

## O que é específico do celular

- Layout dos temas em duas colunas em telas até 560px.
- A carta se ajusta à altura visível da tela (`100dvh`), sem cortar nem precisar rolar.
- Arrastar o dedo para o lado troca de carta (esquerda = próxima, direita = anterior).
- Toque na carta para virar; os pontinhos têm área de toque ampliada.
- Respeita as áreas seguras do iPhone (notch e barra de gestos).

## Gerar a versão de produção

```bash
npm run build     # gera a pasta dist/
npm run preview   # serve a dist/ localmente para conferir
```

A pasta `dist/` é estática: pode ser publicada em qualquer hospedagem
(Netlify, Vercel, GitHub Pages, Hostinger...). O `base: "./"` no
`vite.config.js` faz funcionar até abrindo o `index.html` direto de uma subpasta.

## Estrutura

```
src/
  main.jsx                  ponto de entrada
  App.jsx                   página inicial + controle da sessão de jogo
  styles.css                todo o CSS (claro/escuro, cartas, mesa)
  utils.js                  pad(), deckBg(), shuffled()
  data/themes.js            os 10 temas e as 90 perguntas
  hooks/useProgress.js      progresso salvo no localStorage
  components/
    Hero.jsx                cabeçalho com o leque de cartas
    Rules.jsx               as 4 regras ("como jogar")
    ThemeGrid.jsx           grade dos 10 temas
    ThemeCard.jsx           carta de tema com barra de progresso
    GameTable.jsx           mesa de jogo (overlay em tela cheia)
    Card3D.jsx              carta com virada 3D
    Controls.jsx            setas, pips e contador
    FinalRound.jsx          rodada final
```

## Como editar as perguntas

Tudo fica em `src/data/themes.js`. Cada tema tem `name` (título),
`c` (cor do baralho) e `cards` (as 9 perguntas, em ordem).

## Progresso

As cartas já vistas ficam salvas no navegador (`localStorage`, chave
`dates10.progress.v1`) — a mesma chave da versão em HTML. O botão
"Zerar progresso" no rodapé limpa tudo.

## Atalhos de teclado (na mesa)

- `←` / `→` — carta anterior / próxima
- `Espaço` / `Enter` — virar a carta
- `Esc` — voltar para a escolha de temas

No celular, arrastar o dedo para os lados também troca de carta.
