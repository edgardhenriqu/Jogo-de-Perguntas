import { SECRET } from "./secret.js";

/**
 * Os 10 temas do baralho — 9 cartas em cada um (90 no total).
 * name: titulo do tema | c: cor do baralho | cards: perguntas
 */
export const THEMES = [
    { name:"Sobre você e sobre mim", c:"#D99A2B", cards:[
      "Se você só pudesse escolher 3 coisas para comer pelo resto da sua vida, o que seria?",
      "Como você descreveria a sua personalidade?",
      "Falem sobre 5 qualidades que vocês gostam um no outro.",
      "Qual é o seu filme, sua série, sua música e livro favorito?",
      "Quais são seus hobbies favoritos?",
      "Como você gosta de relaxar e recarregar suas energias depois de um dia difícil?",
      "Se você pudesse descrever um momento de autodescoberta significativo em sua vida, qual seria? E o que você aprendeu sobre você?",
      "O que mais te inspira na vida? Existem filosofias ou ideias que moldam sua maneira de olhar o mundo?",
      "Quais coisas você quer fazer antes de morrer?"
    ]},
    { name:"Metas, sonhos e futuro", c:"#3E7BC9", cards:[
      "Quais são os seus sonhos para o futuro?",
      "Como você imagina a vida juntos daqui a cinco anos? E daqui a dez anos?",
      "Quais são os passos práticos que vocês podem tomar agora para começar a transformar seus sonhos em realidade?",
      "O que você pode fazer para conseguir se aproximar dos seus objetivos futuros?",
      "O que posso fazer para te apoiar na realização de seus sonhos individuais?",
      "Quais são as experiências que vocês gostariam de compartilhar juntos ao longo dos próximos anos?",
      "Quais são os obstáculos que vocês acreditam que podem ter ao buscar suas metas e como podem enfrentá-los juntos?",
      "O que vocês podem fazer para nutrir a paixão e o entusiasmo em relação aos seus sonhos compartilhados?",
      "Quais são os legados que desejam deixar como casal?"
    ]},
    { name:"Sexo e intimidade", c:"#D14A73", cards:[
      "O que você acha que é mais importante para criar uma conexão emocional e física forte durante o sexo?",
      "Quais são os rituais ou hábitos que podemos colocar na nossa rotina para aumentar a intimidade e a conexão sexual?",
      "Quais são as suas expectativas em relação à frequência e à qualidade do sexo em nosso relacionamento?",
      "O que te faz perder a conexão sexual e quais os caminhos para recuperá-la?",
      "Existe alguma insegurança, trauma ou limite sexual que você gostaria de compartilhar?",
      "Existem desejos ou fantasias que você gostaria de explorar comigo?",
      "O que eu faço na hora do sexo que você mais gosta?",
      "O que aumenta ainda mais o seu prazer quando estamos transando?",
      "Como vocês podem manter a paixão e a conexão sexual ao longo do tempo em seu relacionamento?"
    ]},
    { name:"Trabalho e dinheiro", c:"#24A17B", cards:[
      "O que é sucesso profissional para você?",
      "Quais as suas expectativas financeiras?",
      "Como você se sente em relação ao equilíbrio entre trabalho e vida pessoal do seu parceiro?",
      "O que você pensa sobre a divisão de dinheiro no nosso relacionamento?",
      "Existem preocupações financeiras que você sente que precisamos abordar como casal?",
      "Existem hábitos de consumo que você gostaria que mudássemos?",
      "Como podemos tornar nossas metas financeiras um projeto compartilhado e motivador para ambos?",
      "Há algum medo ou insegurança que você tem relacionado ao dinheiro que gostaria de discutir?",
      "De que maneira a estabilidade ou instabilidade financeira impactam nosso planejamento para o futuro?"
    ]},
    { name:"Comunicação e resolução de conflitos", c:"#5C7A96", cards:[
      "Como você prefere discutir assuntos importantes: em conversas espontâneas ou planejadas?",
      "Como você se sente sobre a maneira como resolvemos nossos últimos desentendimentos?",
      "Como você se sente em relação ao uso de humor durante nossas discussões?",
      "Existe algum tema que você sente que evitamos discutir, mas precisamos falar sobre?",
      "Existe algo que eu faço durante os conflitos que te magoa ou impede a resolução?",
      "Você acha que nossos estilos de comunicação são compatíveis? Como podemos melhorar?",
      "Como você gostaria que eu demonstrasse apoio durante momentos de estresse ou conflito?",
      "Existe algo que eu disse em um conflito anterior que você gostaria de revisitar para esclarecer ou corrigir?",
      "Quais estratégias podemos adotar para evitar mal-entendidos nas nossas conversas?"
    ]},
    { name:"Tempo de qualidade, limites e compatibilidade", c:"#8163CC", cards:[
      "Existe algo que você nunca tentou antes, mas gostaria de experimentar comigo?",
      "Existem limites específicos que você sente que precisamos estabelecer ou ajustar?",
      "Existem gostos ou preferências que você sacrificou pelo nosso relacionamento? Como se sente a respeito disso?",
      "Como podemos criar novas tradições legais na nossa rotina?",
      "Você acha que nossos amigos e família respeitam os limites do nosso relacionamento? Como podemos melhorar isso?",
      "Como você avalia a importância de datas comemorativas e aniversários em nosso relacionamento?",
      "Existem atividades ou hobbies que você prefere fazer sozinho?",
      "Como você se sente sobre a quantidade de tempo que passamos juntos atualmente? De que maneira podemos melhorar esse tempo de qualidade?",
      "Existem atividades externas ou grupos nos quais poderíamos nos envolver, juntos, para expandir o nosso círculo social?"
    ]},
    { name:"Saúde e estilo de vida", c:"#1D9AA6", cards:[
      "Como você descreveria seu estilo de vida atual e como ele influencia nossa relação?",
      "Existem hábitos de saúde que você gostaria que mudássemos juntos?",
      "Como você acha que o consumo de álcool, tabaco ou outras substâncias afeta nossa relação?",
      "Você se sente confortável discutindo suas preocupações de saúde comigo?",
      "Você se sente apoiado por mim em suas escolhas de estilo de vida? Como posso oferecer mais suporte?",
      "Que atividades de bem-estar você gostaria de experimentar junto comigo?",
      "Como podemos motivar um ao outro a manter um compromisso com um estilo de vida saudável, especialmente durante períodos difíceis?",
      "Existe alguma mudança em nosso ambiente doméstico que poderia nos ajudar a viver de maneira mais saudável?",
      "Como a espiritualidade influencia seu bem-estar pessoal e nossa vida como casal?"
    ]},
    { name:"Respeito e compromisso", c:"#7CA33A", cards:[
      "Para você, quais são os principais acordos que temos dentro do nosso relacionamento?",
      "De que maneiras você se sente respeitado e valorizado por mim? Como posso melhorar?",
      "Existem limites pessoais que você sente que precisam ser mais respeitados?",
      "Como eu posso demonstrar compromisso com nosso relacionamento no dia a dia?",
      "Você se sente respeitado nas opiniões em que divergimos? Como você acredita que podemos manter o respeito em relação a essas diferenças?",
      "Como você se sente em relação aos acordos que fizemos dentro do nosso relacionamento até agora?",
      "Você acha que há um equilíbrio saudável entre nosso compromisso um com o outro e nossa independência pessoal?",
      "Você se sente seguro para expressar quando algo não está respeitando seus limites ou expectativas?",
      "O que te faria sentir que os nossos acordos estão sendo quebrados?"
    ]},
    { name:"Date surpresa", c:"#E0574B", cards:[
      "Planejem o dia perfeito juntos e definam uma data pra ele acontecer.",
      "Façam uma coisa improvável hoje que vocês normalmente não fariam. Uma loucura juntos, algo que vocês vão contar futuramente e dar boas risadas!",
      "Cada um tem direito a fazer 3 perguntas e 3 desafios.",
      "Pensem em uma festa temática, marquem uma data, organizem juntos e convidem pessoas importantes pra vocês.",
      "Liguem para alguém que vocês amam e que foi importante pra vocês como casal e agradeçam com uma mensagem carinhosa.",
      "Contem um para o outro surpresas que vocês adorariam ter. Depois disso, você tem uma missão: realizá-las até o fim do ano, de forma inesperada.",
      "Planeje, em segredo, a programação de um dia inteiro para o seu parceiro e marque uma data para ela acontecer.",
      "Planejem a próxima viagem juntos agora, com lugar, data e roteiro.",
      "Escrevam uma lista de “coisas a fazer juntos antes de morrer”."
    ]},
    { name:"Nossa história", c:"#B457A8", cards:[
      "Qual foi o momento em que você sentiu que nossa conexão estava mais forte do que nunca?",
      "Quando foi que você percebeu que estava apaixonado por mim?",
      "Existem momentos específicos em nossa história que você considera como pontos de virada para sermos o que somos hoje?",
      "Se pudéssemos voltar no tempo para reviver uma experiência que compartilhamos juntos, qual você escolheria e por quê?",
      "Qual é a lembrança mais engraçada ou descontraída que você tem de nós dois juntos?",
      "Se você fosse contar a nossa história para um desconhecido, como contaria?",
      "Se pudéssemos extrair uma lição valiosa de nossa história, qual você diria?",
      "Se você pudesse escolher qualquer lugar do mundo para me levar, qual seria e por quê?",
      "Quais são as coisas que a gente precisa prometer nunca fazer um com o outro?"
    ]}
];

export const CARDS_POR_TEMA = 9;

/** Todos os baralhos jogaveis: os dez temas + o baralho 11 (secreto). */
export const ALL_DECKS = THEMES.concat([SECRET]);
export const SECRET_INDEX = THEMES.length;
