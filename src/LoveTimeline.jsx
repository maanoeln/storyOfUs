import { useState, useEffect, useRef } from "react";

// ── IMAGES ───────────────────────────────────────────────────────────────────
// In your project, place the images folder alongside this file:
//   src/
//     LoveTimeline.jsx
//     images/
//       festa-junina-2024.jpg
//       aniversario-mae-2024.jpg
//
// If using Vite or Create React App, these imports work out of the box.
import img1 from "./images/festa-junina-2024.jpg";
import img2 from "./images/aniversario-mae-2024.jpg";
import img3 from "./images/dormindo-no-sofa-2024.jpg";
import img4 from "./images/aniversario-eugenia-2024.jpg";
import img5 from "./images/pedido-baloes-2024.jpg";
import img6 from "./images/pedido-selfie-2024.jpg";
import img7 from "./images/aniversario-monique-2024.jpg";
import img8 from "./images/final-de-semana-sorvete-2024.jpg";
import img9 from "./images/primeira-viagem-2024.jpg";
import img10 from "./images/piri-dia-2024.jpg";
import img11 from "./images/piri-noite-2024.jpg";
import img12 from "./images/piri-restaurante-2024.jpg";
import img13 from "./images/academia-2024.jpg";
import img14 from "./images/natal-raissa-2024.jpg";
import img15 from "./images/ano-novo-2024.jpg";
// import img3 from "./images/your-next-photo.jpg";

// ── MOMENTS DATA ─────────────────────────────────────────────────────────────
const moments = [
  {
    id: 1,
    side: "left",
    tag: "Família",
    date: "15 de junho de 2024",
    title: "Seu primeiro contato com minha família",
    preview:
      "Nervoso, ansioso, radiante — tudo ao mesmo tempo. E valeu cada segundo.",
    story: `Esse dia eu me sentia muito radiante, muito nervoso e ansioso ao mesmo tempo. Depois de algum tempo ficando junto com você, essa seria a primeira vez que você teria contato com a minha família.

Eu só torcia pelo melhor, para que tudo ocorresse bem, sem intercorrências e de forma natural. Estava bem nervoso.

Apesar de tudo isso, eu me sentia muito feliz de enfim poder te trazer aqui e apresentá-lo a todos. Tudo ocorreu melhor do que eu poderia esperar, tudo ocorreu com uma fluidez tão natural, de forma tão espontânea, foi tão satisfatório ver vocês se darem bem.

Voltei pra Goiânia me sentindo a pessoa mais sortuda dessa vida!`,
    image: img1,
    portrait: true,
  },
  {
    id: 2,
    side: "right",
    tag: "Família",
    date: "24 de agosto de 2024",
    title: "Aniversário da minha mãe",
    preview:
      "Minha mãe te puxando para dançar. Aquilo me fez sentir um cara tão sortudo.",
    story: `Nesse dia estava sendo o seu segundo contato com minha família. Era aniversário da minha família, em especial, você estava aqui presente para que pudéssemos comemorar o aniversário da minha mãe.

Me senti bastante feliz nesse dia por poder te trazer mais uma vez para o meu meio familiar e perceber o quanto você estava se dando bem com todo mundo.

Lembro da minha mãe te puxando para dançar, aquilo me causou uma felicidade tão grande, me fez sentir um cara tão sortudo.`,
    image: img2,
  },
  {
    id: 3,
    side: "left",
    tag: "Cotidiano",
    date: "01 de setembro de 2024",
    title: "Você dormindo na sala enquanto assistíamos algo",
    preview:
      "Só te olhava e pensava o quanto eu era sortudo de poder compartilhar a vida com você.",
    story: `Esse dia eu só te olhava e admirava você ali no sofá dormindo!

Pensava o quanto eu era sortudo em estar tendo a oportunidade de estar compartilhando a vida e momentos tão mágicos com uma pessoa tão boa, carinhosa, companheira e leve como você.

Aqui eu já sentia um frio na barriga, estava me preparando para poder te pedir em namoro depois de tanto tempo, estava correndo atrás de tudo para poder organizar a surpresa que eu havia planejado em minha cabeça.`,
    image: img3,
    portrait: true,
  },
  {
    id: 4,
    side: "right",
    tag: "Amigos",
    date: "08 de setembro de 2024",
    title: "Aniversário da Eugênia",
    preview:
      "Olha essas carinhas apaixonadas e felizes. Você tinha acabado de conhecer a Luísa.",
    story: `Aniversário da Eugênia, no Terruá.

Olha essas carinhas apaixonadas e felizes.

Aqui você tinha acabado de conhecer a Luísa.`,
    image: img4,
    portrait: true,
  },
  {
    id: 5,
    side: "left",
    tag: "O Grande Dia",
    date: "19 de setembro de 2024",
    title: "Chegou o grande dia",
    preview:
      "Oito meses desde o nosso primeiro encontro. Era a hora. Você disse SIM.",
    story: `Chegou o grande dia! Eu não sei nem descrever como eu estava me sentindo neste dia, era um mix de sentimentos que se enrolavam tudo por dentro. Oito meses desde o nosso primeiro encontro, no exato mesmo dia, havia preparado tudo pra que a data fosse a mesma e fizéssemos desse dia: o nosso dia.

Eu estava ansioso, com medo, nervoso, assustado, apaixonado, feliz, radiante e com o coração a mil.

Eu passava e repassava esse momento por várias vezes durante o meu dia, para que tudo saísse perfeito, para que nada saísse fora da linha, para que tudo que acontecesse fosse da forma que eu esperava.

Comprei tudo o que eu precisava, organizei o quarto e deixei tudo pronto para te esperar, não lembro bem agora, mas acredito que nesse dia eu fiz lasanha para a gente, né?

Me lembro que nesse dia você não ia me visitar, se não me engano, você estava em semana de provas e tinha que estudar, mas aí te falei que tinha preparado algo pra esse dia e você mudou seus planos e acabou indo para minha casa.

Dessa vez não deixei que usássemos o meu quarto, e fomos para o quarto dos meus pais.

Enfim, chegou a hora, te levei para meu quarto para que eu pudesse te fazer o pedido oficial. Gente, eu sentia o meu coração na garganta. Ao mesmo tempo que eu queria saber a resposta logo, eu estava com medo de saber qual seria a resposta.

Você disse SIM! QUE FELICIDADE!

Eu me sentia a pessoa mais realizada nessa terra.

O meu corujinha, o meu shrek, enfim, era agora também, o meu NAMORADO.`,
    images: [img5, img6],
    image: img5,
  },
  {
    id: 6,
    side: "right",
    tag: "Família",
    date: "28 de outubro de 2024",
    title: "Aniversário da Monique",
    preview:
      "Que gatos! E a cereja do bolo: minha prima nos fotografando bem discretamente. Rs",
    story: `Que gatos!

Mais uma vez você aqui em Santa Helena. Dessa vez para o aniversário de 15 anos da minha prima.

Lembra o quanto comemos? Comemos de tudo mesmo.

E a cereja do bolo da noite: minha prima tirando foto nossa, bem discretamente! Rs`,
    image: img7,
    portrait: true,
  },
  {
    id: 7,
    side: "left",
    tag: "Cotidiano",
    date: "01 de novembro de 2024",
    title: "Mais um final de semana normal",
    preview:
      "Sorvete, jantar gordo, sofá e série. Simples assim — e perfeito assim.",
    story: `Mais um final de semana normal nas nossas vidas.

Você vinha passar o final de semana, comprávamos um pote de sorvete, jantávamos algo bem gordo e depois nos acabávamos no sofá nos afundando no pote de sorvete assistindo algo.`,
    image: img8,
    portrait: true,
  },
  {
    id: 8,
    side: "right",
    tag: "Aventura",
    date: "09 de dezembro de 2024",
    title: "Nossa primeira viagem juntos",
    preview:
      "Ansioso, animado — e pregado em você o final de semana inteiro, igual carrapato. Rs",
    story: `Nossa primeira viagem juntos que não fosse pra Santa Helena. Eu estava bastante ansioso por ela e ao mesmo tempo, bastante animado.

Afinal, passaria o final de semana inteiro, ao seu lado, pregado em você, parecendo carrapato, como você mesmo costumava dizer.`,
    image: img9,
    portrait: true,
  },
  {
    id: 9,
    side: "left",
    tag: "Viagem",
    date: "10/11 de dezembro de 2024",
    title: "Piri, tão gostosinho",
    preview:
      "Não fomos pra sair. Fomos pra nos amar, pregadinhos um no outro, curtindo a nossa companhia.",
    story: `Piri, que delicinha de viagem.

Não fomos pra sair, não fomos pra cachoeira, não fomos para mais nada além de ficar pregadinho um no outro curtindo a nossa companhia e nos amando.

Ah, se aquele Airbnb falasse, rs.

Não poupamos lugar nenhum, uma coisa que sempre admirei na gente como casal é o fogo que tínhamos um com o outro, a chama não se apagava, não era aquele tipo de casal que vai caindo na rotina.

A gente tava ali, sempre pronto pra nos amar, pra nos provocar, pra caminhar um pelo corpo do outro em perfeita sintonia.`,
    images: [img10, img11, img12],
    image: img10,
    portrait: true,
  },
  {
    id: 10,
    side: "right",
    tag: "Cotidiano",
    date: "15 de dezembro de 2024",
    title: "Você e sua mania de me levar pra academia",
    preview:
      "Sua maldita mania de me levar pra academia nos finais de semana, mesmo sabendo o quanto eu odiava. Rs",
    story: `Você e sua maldita mania de me levar para a academia aos finais de semana, mesmo sabendo o quanto eu odiava.`,
    image: img13,
    portrait: true,
  },
  {
    id: 11,
    side: "left",
    tag: "Cotidiano",
    date: "22 de dezembro de 2024",
    title: "Natal na Raíssa",
    preview:
      "Academia, mercado, avocado estragado e muito guacamole. Só a gente sabe o quanto eu amava isso. Rs",
    story: `Mais uma vez você me arrastando para a academia aos finais de semana — nossa, como eu amava esse programa. Só eu e você sabemos o quanto.

Esse dia, depois da academia saímos para comprar as coisas para fazer guacamole para levar para a casa da Raíssa na festa de Natal.

Lembra a função que foi? O tanto de avocado estragado, que raiva!`,
    image: img14,
    portrait: true,
  },
  {
    id: 12,
    side: "right",
    tag: "Momento especial",
    date: "31 de dezembro de 2024",
    title: "Nosso primeiro Ano-Novo juntos",
    preview:
      "Nada demais. Casa da minha tia, um drink, jantar. Mas você estava ao meu lado — era o que mais importava.",
    story: `Nosso primeiro Ano-Novo juntinhos.

Não fizemos nada demais, fomos para a casa da minha tia, bebemos um drink ou outro e jantamos. Tudo muito caseiro e pacato.

Mas muito especial por você estar ao meu lado. Era o que mais importava.`,
    image: img15,
    portrait: true,
  },
  // ── ADD MORE MOMENTS HERE ────────────────────────────────────────────────
  // {
  //   id: 3,
  //   side: "left",
  //   tag: "Add tag",
  //   date: "Add date",
  //   title: "Add title",
  //   preview: "Short preview line.",
  //   story: `Your full story here.`,
  //   image: img3,
  // },
];

// ── PLAYLIST DATA ─────────────────────────────────────────────────────────────

// ── STYLES ────────────────────────────────────────────────────────────────────
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@300;400;600;700&family=Barlow+Condensed:wght@700;800&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }

  :root {
    --black:     #0A0A0A;
    --off-black: #111111;
    --carbon:    #1A1A1A;
    --steel:     #2A2A2A;
    --wire:      #444444;
    --red:       #D42B3A;
    --white:     #F0EDEA;
    --muted:     #888888;
    --light:     #CCCCCC;
  }

  body {
    font-family: 'Barlow', sans-serif;
    background: var(--black);
    color: var(--white);
    overflow-x: hidden;
  }

  body::after {
    content: '';
    position: fixed; inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E");
    pointer-events: none; z-index: 9999; opacity: 0.45; mix-blend-mode: overlay;
  }

  /* HERO */
  .hero {
    min-height: 100vh; display: grid; place-items: center;
    position: relative; overflow: hidden; padding: 2rem;
    background: var(--black);
  }
  .hero-stripes {
    position: absolute; inset: 0; pointer-events: none;
    background: repeating-linear-gradient(-55deg,
      transparent 0px, transparent 60px,
      rgba(212,43,58,0.04) 60px, rgba(212,43,58,0.04) 61px);
  }
  .hero-glow {
    position: absolute; width: 700px; height: 700px;
    background: radial-gradient(circle, rgba(212,43,58,0.15) 0%, transparent 70%);
    top: 50%; left: 50%; transform: translate(-50%,-50%); pointer-events: none;
  }
  .hero-bg-word {
    position: absolute; font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(100px,20vw,240px); color: rgba(255,255,255,0.025);
    letter-spacing: -0.02em; line-height: 0.85;
    pointer-events: none; user-select: none;
  }
  .hero-bg-word.tl { top: -10px; left: -10px; }
  .hero-bg-word.br { bottom: -10px; right: -10px; text-align: right; }
  .hero-inner { position: relative; z-index: 2; text-align: center; max-width: 820px; }
  .hero-kicker {
    font-family: 'Barlow Condensed', sans-serif; font-size: 0.85rem;
    font-weight: 700; letter-spacing: 0.25em; text-transform: uppercase;
    color: var(--red); margin-bottom: 1.2rem;
  }
  .hero-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(5rem,15vw,11rem);
    line-height: 0.88; letter-spacing: 0.02em; color: var(--white);
  }
  .hero-title .outline { -webkit-text-stroke: 2px var(--red); color: transparent; display: block; }
  .hero-title .filled  { color: var(--red); display: block; }
  .hero-bar { width: 60px; height: 3px; background: var(--red); margin: 1.8rem auto; }
  .hero-sub {
    font-size: clamp(0.9rem,2vw,1.05rem); font-weight: 300;
    color: var(--muted); max-width: 400px; margin: 0 auto;
    line-height: 1.85; letter-spacing: 0.02em;
  }
  .scroll-cue {
    position: absolute; bottom: 2.5rem; left: 50%; transform: translateX(-50%);
    display: flex; flex-direction: column; align-items: center; gap: 8px;
    font-family: 'Barlow Condensed', sans-serif; font-size: 0.65rem;
    letter-spacing: 0.22em; text-transform: uppercase; color: var(--wire);
  }
  .scroll-cue-line {
    width: 1px; height: 48px;
    background: linear-gradient(to bottom, var(--red), transparent);
    animation: dropLine 2s ease-in-out infinite;
  }
  @keyframes dropLine {
    0%   { transform: scaleY(0); transform-origin: top; }
    50%  { transform: scaleY(1); transform-origin: top; }
    51%  { transform: scaleY(1); transform-origin: bottom; }
    100% { transform: scaleY(0); transform-origin: bottom; }
  }

  /* TIMELINE */
  .timeline-section { padding: 6rem 1.5rem; max-width: 980px; margin: 0 auto; }
  .sec-header { display: flex; align-items: baseline; gap: 16px; margin-bottom: 4rem; }
  .sec-num {
    font-family: 'Bebas Neue', sans-serif; font-size: 5rem;
    color: rgba(255,255,255,0.05); line-height: 1; flex-shrink: 0;
  }
  .sec-eyebrow {
    font-family: 'Barlow Condensed', sans-serif; font-size: 0.75rem;
    font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--red); margin-bottom: 4px;
  }
  .sec-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(2.2rem,5vw,3.8rem); line-height: 0.9; color: var(--white);
  }

  .track-wrap { position: relative; }
  .track-wrap::before {
    content: ''; position: absolute; left: 50%; top: 0; bottom: 0; width: 1px;
    background: linear-gradient(to bottom, transparent, var(--steel) 8%, var(--steel) 92%, transparent);
    transform: translateX(-50%);
  }

  /* CAROUSEL */
  .carousel { position: relative; width: 100%; aspect-ratio: 3/4; overflow: hidden; background: var(--steel); }
  .carousel-slides { display: flex; width: 100%; height: 100%; transition: transform 0.45s cubic-bezier(0.4,0,0.2,1); }
  .carousel-slide { min-width: 100%; height: 100%; position: relative; flex-shrink: 0; }
  .carousel-slide img { width: 100%; height: 100%; object-fit: cover; object-position: center 10%; display: block; transition: filter 0.35s, transform 0.4s; }
  .card:hover .carousel-slide img { filter: brightness(1.05) contrast(1.05); transform: scale(1.04); }
  .carousel-btn {
    position: absolute; top: 50%; transform: translateY(-50%);
    width: 30px; height: 30px; background: rgba(10,10,10,0.65);
    border: 1px solid rgba(255,255,255,0.15); border-radius: 2px;
    color: var(--white); font-size: 0.75rem; cursor: pointer;
    display: grid; place-items: center; z-index: 4;
    transition: background 0.2s; backdrop-filter: blur(4px);
  }
  .carousel-btn:hover { background: var(--red); border-color: var(--red); }
  .carousel-btn.prev { left: 10px; }
  .carousel-btn.next { right: 10px; }
  .carousel-dots {
    position: absolute; bottom: 10px; left: 50%; transform: translateX(-50%);
    display: flex; gap: 5px; z-index: 4;
  }
  .carousel-dot {
    width: 6px; height: 6px; border-radius: 50%;
    background: rgba(255,255,255,0.35); border: none; padding: 0; cursor: pointer;
    transition: background 0.2s, transform 0.2s;
  }
  .carousel-dot.active { background: var(--red); transform: scale(1.3); }

  /* Modal carousel */
  .modal-carousel { position: relative; width: 100%; aspect-ratio: 3/4; max-height: 60vh; overflow: hidden; background: var(--steel); }
  .modal-carousel-slides { display: flex; height: 100%; transition: transform 0.45s cubic-bezier(0.4,0,0.2,1); }
  .modal-carousel-slide { min-width: 100%; height: 100%; flex-shrink: 0; position: relative; }
  .modal-carousel-slide img { width: 100%; height: 100%; object-fit: cover; object-position: center 10%; display: block; }
  .modal-carousel-slide::after {
    content: ''; position: absolute; inset: 0;
    background: linear-gradient(to bottom, transparent 55%, rgba(0,0,0,0.6) 100%);
    pointer-events: none;
  }
  .modal-carousel-slide::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: var(--red); z-index: 2;
  }
  .modal-carousel-btn {
    position: absolute; top: 50%; transform: translateY(-50%);
    width: 36px; height: 36px; background: rgba(10,10,10,0.65);
    border: 1px solid rgba(255,255,255,0.15); border-radius: 2px;
    color: var(--white); font-size: 0.9rem; cursor: pointer;
    display: grid; place-items: center; z-index: 4;
    transition: background 0.2s; backdrop-filter: blur(4px);
  }
  .modal-carousel-btn:hover { background: var(--red); border-color: var(--red); }
  .modal-carousel-btn.prev { left: 12px; }
  .modal-carousel-btn.next { right: 12px; }
  .modal-carousel-dots {
    position: absolute; bottom: 12px; left: 50%; transform: translateX(-50%);
    display: flex; gap: 6px; z-index: 4;
  }
  .modal-carousel-dot {
    width: 7px; height: 7px; border-radius: 50%;
    background: rgba(255,255,255,0.35); border: none; padding: 0; cursor: pointer;
    transition: background 0.2s, transform 0.2s;
  }
  .modal-carousel-dot.active { background: var(--red); transform: scale(1.3); }



  /* LETTER SECTION */
  .letter-section {
    padding: 7rem 2rem;
    position: relative;
    overflow: hidden;
    background: var(--off-black);
    border-top: 1px solid var(--steel);
  }
  .letter-section::before {
    content: '';
    position: absolute; inset: 0;
    background: radial-gradient(ellipse at 50% 0%, rgba(212,43,58,0.08) 0%, transparent 65%);
    pointer-events: none;
  }
  .letter-inner {
    max-width: 640px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }
  .letter-eyebrow {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 0.72rem; font-weight: 700;
    letter-spacing: 0.25em; text-transform: uppercase;
    color: var(--red); margin-bottom: 2.5rem;
  }
  .letter-bar {
    width: 40px; height: 3px;
    background: var(--red); margin-bottom: 2.5rem;
  }
  .letter-text {
    font-size: clamp(1.05rem, 2.2vw, 1.25rem);
    font-weight: 300;
    color: var(--light);
    line-height: 2.1;
    letter-spacing: 0.01em;
  }
  .letter-highlight {
    color: var(--white);
    font-weight: 600;
    position: relative;
    display: inline;
  }
  .letter-highlight::after {
    content: '';
    position: absolute;
    bottom: -2px; left: 0; right: 0;
    height: 2px;
    background: var(--red);
    border-radius: 1px;
  }

  /* Spotify embed */
  .spotify-embed { margin-top: 2rem; border-radius: 12px; overflow: hidden; }
  .spotify-embed iframe { display: block; border-radius: 12px; }

  @media (max-width: 660px) { .track-wrap::before { left: 16px; transform: none; } }

  .moment {
    display: flex; justify-content: flex-end;
    padding-right: calc(50% + 44px);
    margin-bottom: 5rem; position: relative;
    opacity: 0; transform: translateX(-36px);
    transition: opacity 0.75s ease, transform 0.75s ease;
  }
  .moment.right {
    justify-content: flex-start;
    padding-right: 0; padding-left: calc(50% + 44px);
    transform: translateX(36px);
  }
  .moment.visible { opacity: 1; transform: none; }
  .moment::after {
    content: ''; position: absolute; left: calc(50% - 7px); top: 26px;
    width: 14px; height: 14px; background: var(--red);
    border: 2px solid var(--black); border-radius: 50%;
    box-shadow: 0 0 0 3px var(--steel), 0 0 18px rgba(212,43,58,0.45);
    z-index: 2; transition: box-shadow 0.3s;
  }
  .moment:hover::after { box-shadow: 0 0 0 3px var(--steel), 0 0 28px rgba(255,23,68,0.7); }
  @media (max-width: 660px) {
    .moment, .moment.right { padding: 0 0 0 50px; justify-content: flex-start; }
    .moment::after { left: 9px; }
  }

  /* CARD */
  .card {
    width: 100%; max-width: 380px;
    background: var(--carbon); border: 1px solid var(--steel);
    border-radius: 4px; overflow: hidden; cursor: pointer; position: relative;
    transition: transform 0.25s ease, border-color 0.25s, box-shadow 0.25s;
  }
  .card::before {
    content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 3px;
    background: var(--red); transform: scaleY(0); transform-origin: bottom;
    transition: transform 0.3s; z-index: 3;
  }
  .card:hover { transform: translateY(-5px); border-color: var(--wire); box-shadow: 0 14px 44px rgba(0,0,0,0.65), 0 0 28px rgba(212,43,58,0.14); }
  .card:hover::before { transform: scaleY(1); }

  .card-img-wrap {
    width: 100%; overflow: hidden; position: relative; background: var(--steel);
  }
  .card-img-wrap.landscape { aspect-ratio: 3/2; }
  .card-img-wrap.portrait  { aspect-ratio: 3/4; }
  .card-img {
    width: 100%; height: 100%; object-fit: cover; object-position: center 10%; display: block;
    transition: filter 0.35s, transform 0.4s ease;
  }
  .card:hover .card-img { filter: brightness(1.05) contrast(1.05); transform: scale(1.04); }
  .card-date-badge {
    position: absolute; bottom: 10px; right: 10px;
    font-family: 'Barlow Condensed', sans-serif; font-size: 0.62rem; font-weight: 700;
    letter-spacing: 0.15em; text-transform: uppercase; color: rgba(255,255,255,0.9);
    background: rgba(10,10,10,0.72); padding: 3px 9px; border-radius: 2px;
    backdrop-filter: blur(6px); z-index: 2;
  }
  .card-placeholder {
    width: 100%; aspect-ratio: 3/2; background: var(--steel);
    display: flex; align-items: center; justify-content: center;
    font-size: 3rem; position: relative; overflow: hidden;
  }
  .card-placeholder::before {
    content: ''; position: absolute; inset: 0;
    background: repeating-linear-gradient(-45deg, transparent, transparent 18px,
      rgba(255,255,255,0.03) 18px, rgba(255,255,255,0.03) 19px);
  }
  .card-body { padding: 1.2rem 1.5rem 1.5rem; }
  .card-tag {
    font-family: 'Barlow Condensed', sans-serif; font-size: 0.62rem; font-weight: 700;
    letter-spacing: 0.22em; text-transform: uppercase; color: var(--red); margin-bottom: 8px;
  }
  .card-title {
    font-family: 'Bebas Neue', sans-serif; font-size: 1.45rem;
    letter-spacing: 0.04em; color: var(--white); line-height: 1.05; margin-bottom: 10px;
  }
  .card-preview {
    font-size: 0.82rem; font-weight: 300; color: var(--muted); line-height: 1.7;
    display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
  }
  .card-cta {
    display: inline-flex; align-items: center; gap: 6px; margin-top: 14px;
    font-family: 'Barlow Condensed', sans-serif; font-size: 0.72rem; font-weight: 700;
    letter-spacing: 0.16em; text-transform: uppercase; color: var(--red);
    transition: gap 0.2s; border: none; background: none; cursor: pointer; padding: 0;
  }
  .card:hover .card-cta { gap: 10px; }

  /* MODAL */
  .overlay {
    position: fixed; inset: 0; background: rgba(0,0,0,0.9);
    backdrop-filter: blur(18px); z-index: 600;
    display: flex; align-items: center; justify-content: center; padding: 1.5rem;
    opacity: 0; pointer-events: none; transition: opacity 0.3s;
  }
  .overlay.open { opacity: 1; pointer-events: all; }
  .modal {
    background: var(--off-black); border: 1px solid var(--steel);
    border-radius: 4px; max-width: 680px; width: 100%;
    max-height: 88vh; overflow-y: auto;
    transform: translateY(28px) scale(0.97);
    transition: transform 0.38s cubic-bezier(0.16,1,0.3,1); position: relative;
  }
  .overlay.open .modal { transform: none; }
  .modal-img-wrap {
    width: 100%; position: relative; background: var(--steel);
    display: flex; align-items: center; justify-content: center; overflow: hidden;
  }
  .modal-img-wrap.landscape { aspect-ratio: 16/9; }
  .modal-img-wrap.portrait  { aspect-ratio: 3/4; max-height: 60vh; }
  .modal-img-wrap::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: var(--red); z-index: 2;
  }
  .modal-img-wrap::after {
    content: ''; position: absolute; inset: 0;
    background: linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.5) 100%);
    z-index: 1; pointer-events: none;
  }
  .modal-img {
    width: 100%; height: 100%;
    object-fit: cover;
    object-position: center top;
    display: block;
  }
  .modal-img-wrap.portrait .modal-img {
    object-position: center 15%;
  }
  .modal-placeholder {
    width: 100%; aspect-ratio: 16/9; background: var(--steel);
    display: flex; align-items: center; justify-content: center; font-size: 5rem; position: relative;
  }
  .modal-placeholder::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: var(--red); z-index: 2;
  }
  .modal-body { padding: 2rem 2rem 2.8rem; }
  .modal-meta {
    font-family: 'Barlow Condensed', sans-serif; font-size: 0.72rem; font-weight: 700;
    letter-spacing: 0.22em; text-transform: uppercase; color: var(--red); margin-bottom: 0.6rem;
  }
  .modal-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(1.8rem,5vw,2.8rem); color: var(--white);
    letter-spacing: 0.04em; line-height: 1; margin-bottom: 1.5rem;
  }
  .modal-story {
    font-size: 0.98rem; font-weight: 300; color: var(--light);
    line-height: 2; white-space: pre-line;
  }
  .modal-close {
    position: absolute; top: 12px; right: 12px; width: 34px; height: 34px;
    background: rgba(255,255,255,0.07); border: 1px solid var(--steel);
    border-radius: 2px; color: var(--light); font-size: 0.8rem; cursor: pointer;
    display: grid; place-items: center; transition: background 0.2s, border-color 0.2s; z-index: 10;
  }
  .modal-close:hover { background: var(--red); border-color: var(--red); }

  /* PLAYLIST */
  .playlist-section {
    background: var(--off-black); border-top: 1px solid var(--steel);
    border-bottom: 1px solid var(--steel); padding: 5rem 1.5rem;
    position: relative; overflow: hidden;
  }

  .playlist-inner { max-width: 780px; margin: 0 auto; position: relative; z-index: 1; }
  .playlist-header {
    display: flex; align-items: flex-end; justify-content: space-between;
    margin-bottom: 2.5rem; gap: 1rem;
  }
  .playlist-title {
    font-family: 'Bebas Neue', sans-serif; font-size: clamp(2.4rem,6vw,4rem);
    color: var(--white); line-height: 0.88;
  }
  .playlist-title span { color: var(--red); }
  .playlist-desc { font-size: 0.82rem; font-weight: 300; color: var(--muted); text-align: right; max-width: 200px; line-height: 1.6; }




  /* CLOSING */
  .closing {
    padding: 7rem 2rem; text-align: center;
    position: relative; overflow: hidden; background: var(--black);
  }
  .closing::before {
    content: ''; position: absolute; inset: 0;
    background: radial-gradient(ellipse at 50% 100%, rgba(212,43,58,0.12) 0%, transparent 68%);
    pointer-events: none;
  }
  .closing-quote {
    font-family: 'Bebas Neue', sans-serif; font-size: clamp(2rem,6vw,4.5rem);
    line-height: 1; color: var(--white); max-width: 700px;
    margin: 0 auto 1.6rem; position: relative; z-index: 1; letter-spacing: 0.04em;
  }
  .closing-quote em { color: var(--red); font-style: normal; }
  .closing-bar { width: 40px; height: 3px; background: var(--red); margin: 0 auto 1.4rem; position: relative; z-index: 1; }
  .closing-sub { font-size: 0.88rem; font-weight: 300; color: var(--muted); letter-spacing: 0.1em; position: relative; z-index: 1; }

  @media (max-width: 660px) {
    .sec-header { flex-direction: column; gap: 0; }
    .sec-num { font-size: 3rem; }
    .playlist-header { flex-direction: column; align-items: flex-start; }
    .playlist-desc { text-align: left; max-width: 100%; }
  }
`;

// ── COMPONENT ─────────────────────────────────────────────────────────────────
export default function LoveTimeline() {
  const [activeModal, setActiveModal] = useState(null);
  const [carouselIdx, setCarouselIdx] = useState({});
  const momentRefs = useRef([]);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = css;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.12 },
    );
    momentRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") setActiveModal(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = activeModal ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeModal]);

  const Carousel = ({ images, momentId, stopPropagation = false }) => {
    const idx = carouselIdx[momentId] || 0;
    const go = (e, dir) => {
      if (stopPropagation) e.stopPropagation();
      setCarouselIdx((prev) => ({
        ...prev,
        [momentId]: (idx + dir + images.length) % images.length,
      }));
    };
    const dotGo = (e, i) => {
      if (stopPropagation) e.stopPropagation();
      setCarouselIdx((prev) => ({ ...prev, [momentId]: i }));
    };
    return (
      <div className={stopPropagation ? "modal-carousel" : "carousel"}>
        <div
          className={
            stopPropagation ? "modal-carousel-slides" : "carousel-slides"
          }
          style={{ transform: `translateX(-${idx * 100}%)` }}
        >
          {images.map((src, i) => (
            <div
              key={i}
              className={
                stopPropagation ? "modal-carousel-slide" : "carousel-slide"
              }
            >
              <img src={src} alt={`slide ${i + 1}`} />
            </div>
          ))}
        </div>
        {images.length > 1 && (
          <>
            <button
              className={
                stopPropagation
                  ? "modal-carousel-btn prev"
                  : "carousel-btn prev"
              }
              onClick={(e) => go(e, -1)}
            >
              ‹
            </button>
            <button
              className={
                stopPropagation
                  ? "modal-carousel-btn next"
                  : "carousel-btn next"
              }
              onClick={(e) => go(e, 1)}
            >
              ›
            </button>
            <div
              className={
                stopPropagation ? "modal-carousel-dots" : "carousel-dots"
              }
            >
              {images.map((_, i) => (
                <button
                  key={i}
                  className={
                    (stopPropagation ? "modal-carousel-dot" : "carousel-dot") +
                    (i === idx ? " active" : "")
                  }
                  onClick={(e) => dotGo(e, i)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-stripes" />
        <div className="hero-glow" />
        <div className="hero-bg-word tl">US</div>
        <div className="hero-bg-word br">LOVE</div>
        <div className="hero-inner">
          <p className="hero-kicker">Uma história que vale contar</p>
          <h1 className="hero-title">
            <span>Cada</span>
            <span className="outline">Momento</span>
            <span className="filled">Com Você</span>
          </h1>
          <div className="hero-bar" />
          <p className="hero-sub">
            Os momentos em que o mundo fez sentido — porque você estava nele.
          </p>
        </div>
        <div className="scroll-cue">
          <div className="scroll-cue-line" />
          <span>Scroll</span>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="timeline-section">
        <div className="sec-header">
          <div className="sec-num">01</div>
          <div>
            <div className="sec-eyebrow">Os momentos</div>
            <h2 className="sec-title">NOSSA TIMELINE</h2>
          </div>
        </div>
        <div className="track-wrap">
          {moments.map((m, i) => (
            <div
              key={m.id}
              className={"moment" + (m.side === "right" ? " right" : "")}
              ref={(el) => (momentRefs.current[i] = el)}
            >
              <div className="card">
                {m.images ? (
                  <div
                    style={{ position: "relative" }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Carousel images={m.images} momentId={m.id} />
                    <div className="card-date-badge">{m.date}</div>
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        cursor: "pointer",
                        zIndex: 0,
                      }}
                      onClick={() => setActiveModal(m)}
                    />
                  </div>
                ) : m.image ? (
                  <div
                    className={
                      "card-img-wrap" +
                      (m.portrait ? " portrait" : " landscape")
                    }
                    onClick={() => setActiveModal(m)}
                    style={{ cursor: "pointer" }}
                  >
                    <img src={m.image} alt={m.title} className="card-img" />
                    <div className="card-date-badge">{m.date}</div>
                  </div>
                ) : (
                  <div className="card-placeholder">
                    <span>{m.emoji || "⚡"}</span>
                    <div className="card-date-badge">{m.date}</div>
                  </div>
                )}
                <div
                  className="card-body"
                  onClick={() => setActiveModal(m)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="card-tag">{m.tag}</div>
                  <h3 className="card-title">{m.title}</h3>
                  <p className="card-preview">{m.preview}</p>
                  <button className="card-cta">Ler a história →</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PLAYLIST */}
      <section className="playlist-section">
        <div className="playlist-inner">
          <div className="playlist-header">
            <h2 className="playlist-title">
              NOSSA
              <br />
              <span>TRILHA SONORA</span>
            </h2>
            <p className="playlist-desc">
              As músicas que tocavam quando tudo acontecia.
            </p>
          </div>
          {/* Spotify playlist embed */}
          <div style={{ marginTop: "2.5rem" }}>
            <iframe
              src="https://open.spotify.com/embed/playlist/5vrv9Bv9wwl3LlVTj15qqu?utm_source=generator&theme=0"
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              style={{ borderRadius: "12px", display: "block", border: "none" }}
            />
          </div>
        </div>
      </section>

      {/* LETTER */}
      <section className="letter-section">
        <div className="letter-inner">
          <p className="letter-eyebrow">Para você</p>
          <div className="letter-bar" />
          <p className="letter-text">
            Obrigado por ser meu namorado, meu melhor amigo, meu confidente, meu
            porto seguro, meu SOS e minha pessoa preferida. Obrigado por tudo o
            que você fez e faz por mim e por nós. Você é muito importante para
            mim, benzinho.{" "}
            <span className="letter-highlight">Eu te amo demais!</span>
          </p>
        </div>
      </section>

      {/* CLOSING */}
      <section className="closing">
        <h2 className="closing-quote">
          Você me faz sentir a <em>pessoa mais sortuda</em> dessa vida.
        </h2>
        <div className="closing-bar" />
        <p className="closing-sub">Com tudo que eu tenho.</p>
      </section>

      {/* MODAL */}
      <div
        className={"overlay" + (activeModal ? " open" : "")}
        onClick={(e) => {
          if (e.target.classList.contains("overlay")) setActiveModal(null);
        }}
      >
        <div className="modal">
          <button className="modal-close" onClick={() => setActiveModal(null)}>
            ✕
          </button>
          {activeModal && (
            <>
              {activeModal.images ? (
                <Carousel
                  images={activeModal.images}
                  momentId={`modal-${activeModal.id}`}
                  stopPropagation={true}
                />
              ) : activeModal.image ? (
                <div
                  className={
                    "modal-img-wrap" +
                    (activeModal.portrait ? " portrait" : " landscape")
                  }
                >
                  <img
                    src={activeModal.image}
                    alt={activeModal.title}
                    className="modal-img"
                  />
                </div>
              ) : (
                <div className="modal-placeholder">
                  <span>{activeModal.emoji || "⚡"}</span>
                </div>
              )}
              <div className="modal-body">
                <div className="modal-meta">
                  {activeModal.date} · {activeModal.tag}
                </div>
                <h2 className="modal-title">{activeModal.title}</h2>
                <p className="modal-story">{activeModal.story}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
