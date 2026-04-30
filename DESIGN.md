---
version: alpha
name: PDD
summary: Santuário dark fantasy do clã Parças Do Dota, com energia de Dota 2, humor interno e vermelho de alerta como assinatura visual.
description: Dark fantasy gamer shrine for the Parças Do Dota clan; black glass, crimson highlights, ritual typography, glowing hover states, and irreverent lore-driven copy.
colors:
  primary: "#E81919"
  neutral: "#050505"
  surface: "#111111"
  surfaceElevated: "#171717"
  textPrimary: "#FFFFFF"
  textSecondary: "#D1D5DB"
  textMuted: "#9CA3AF"
  dangerDeep: "#450A0A"
  ember: "#DC2626"
typography:
  display:
    fontFamily: Orbitron
    fontSize: 8rem
    fontWeight: 900
    lineHeight: 0.95
    letterSpacing: "0.12em"
  h1:
    fontFamily: Orbitron
    fontSize: 4.5rem
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "0.06em"
  h2:
    fontFamily: Orbitron
    fontSize: 3rem
    fontWeight: 900
    lineHeight: 1.1
    letterSpacing: "0.08em"
  h3:
    fontFamily: Orbitron
    fontSize: 1.5rem
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "0.12em"
  body:
    fontFamily: Arial
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.65
  body-lg:
    fontFamily: Arial
    fontSize: 1.25rem
    fontWeight: 300
    lineHeight: 1.7
  label:
    fontFamily: Orbitron
    fontSize: 0.75rem
    fontWeight: 900
    lineHeight: 1.2
    letterSpacing: "0.3em"
rounded:
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  shrine: 48px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  section: 96px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.textPrimary}"
    rounded: "{rounded.md}"
    padding: 16px
  button-primary-hover:
    backgroundColor: "{colors.ember}"
    textColor: "{colors.textPrimary}"
    rounded: "{rounded.md}"
    padding: 16px
  button-ghost:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.textPrimary}"
    rounded: "{rounded.md}"
    padding: 16px
  card-glass:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.textMuted}"
    rounded: "{rounded.lg}"
    padding: 24px
  modal-panel:
    backgroundColor: "{colors.surfaceElevated}"
    textColor: "{colors.textSecondary}"
    rounded: "{rounded.xl}"
    padding: 40px
  lore-card:
    backgroundColor: "{colors.dangerDeep}"
    textColor: "{colors.textSecondary}"
    rounded: "{rounded.lg}"
    padding: 32px
---

## Overview

PDD é um fan site de clã, não uma landing corporativa. A experiência deve parecer um santuário gamer: fundo preto, vídeo escuro, vidro esfumaçado, vermelho agressivo, brilho controlado e humor interno tratado como mitologia.

A identidade visual combina Dota 2, madrugada de Discord/Telegram, ironia de grupo fechado e solenidade falsa de clã antigo. O tom é épico e zoeiro ao mesmo tempo: “estatuto”, “hall da fama”, “guardião da memória”, “Cadê sua BKB?” e “18 mil horas sem bota” devem parecer relíquias.

## Colors

- **Primary / Crimson PDD (#E81919):** cor de ação, links importantes, glow, bordas em hover e divisores rituais. Usar com parcimônia; se tudo é vermelho, nada é sagrado.
- **Secondary / Ember Orange (#F97316):** usado em gradientes com vermelho para energia de fogo, rage e highlight de lore.
- **Neutral / Abyss (#050505):** base absoluta do site. PDD vive no preto.
- **Surface / Glass Black (#111111 / #00000066):** painéis, cards e overlays com transparência, blur e bordas fracas.
- **Text Primary (#FFFFFF):** títulos e CTAs.
- **Text Secondary (#D1D5DB):** parágrafos principais.
- **Text Muted (#9CA3AF):** labels, captions, metadados e texto secundário.
- **Danger Deep (#450A0A):** fundos de lore, variações de vermelho escuro e atmosferas de Dota.

Nunca use azul SaaS, gradientes pastel ou brancos chapados como fundo principal. O site deve permanecer dark-first.

## Typography

- **Orbitron:** títulos, siglas, labels e qualquer elemento de clã/ritual. No código atual, a fonte é exposta por `--font-cinzel`, mas carrega Orbitron; preservar a variável por compatibilidade.
- **Arial/Helvetica:** corpo de texto, biografias e blocos longos. Deve ser legível e não competir com os títulos.
- Títulos usam uppercase, peso 900, tracking alto e sombras/glow moderados.
- Labels podem usar tracking extremo (`0.3em` a `0.4em`) para sensação de painel/hud.

## Layout

- A composição é vertical, cinematográfica e centrada.
- Home começa com hero full-screen e vídeo/overlay escuro.
- Seções principais usam `max-w-7xl` ou `max-w-[1400px]`, padding lateral pequeno no mobile e respiro grande no desktop.
- Divisores finos vermelhos são preferidos a blocos pesados.
- Cards devem ter blur, transparência e borda branca/vermelha sutil.
- Mobile deve manter hierarquia simples: um card por linha, botões grandes, textos sem colunas complexas.

## Elevation & Depth

- Profundidade vem de `backdrop-blur`, overlays pretos e sombras vermelhas fracas.
- Hover pode usar `translate-y`, `scale` pequeno e glow vermelho.
- Evite sombras cinzas genéricas. Se houver brilho, ele deve remeter ao vermelho PDD.
- Modais podem usar fundo `bg-black/90` com blur forte, reforçando foco dramático.

## Shapes

- Cards: `rounded-2xl` ou `rounded-3xl`.
- Avatares: círculo ou quadrado arredondado com borda preta/vermelha.
- Botões: `rounded-lg` ou `rounded-xl`, uppercase e peso alto.
- Seções de lore podem usar `rounded-[3rem]` para virar “santuário” visual.

## Components

- **Hero PDD:** sigla enorme, branca, uppercase, tracking largo, sombra preta dura e hover scale leve.
- **Member card:** glass preto, avatar circular, nome em Orbitron, metadados em pílula, CTA primário vermelho para Steam e CTA ghost para biografia.
- **Lore card:** fundo preto/vermelho escuro, aspas decorativas, quote em destaque e autor em label vermelho.
- **Modal biography:** painel grande, fundo neutral-900, borda vermelha no item ativo, navegação lateral circular.
- **Tornobot banner:** card horizontal com ícone vermelho, texto curto e ID em monospace/vermelho.
- **Audio player:** deve parecer controle persistente, não propaganda. Priorizar contraste, acessibilidade e não cobrir CTAs no mobile.

## Do's and Don'ts

Do:
- manter humor interno como parte do produto;
- usar vermelho só para ação, risco, lore e foco;
- preservar glassmorphism e fundo preto;
- escrever microcopy em português, com tom de clã;
- manter `/sobre` como estatuto/lore, não página institucional séria.

Don't:
- transformar PDD em site corporativo limpo;
- clarear o tema;
- usar cards brancos;
- adicionar animação que atrapalhe leitura;
- adicionar complexidade de produto, login ou banco sem necessidade;
- suavizar demais as piadas internas.
