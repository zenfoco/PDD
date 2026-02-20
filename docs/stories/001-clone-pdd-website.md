# Story 001: Clonar e Melhorar o Website PDD

## Contexto
O usuário deseja clonar o site existente (https://darkgray-mallard-292767.hostingersite.com/) focado no grupo "Parças Do Dota" (PDD) e criar uma versão "igual ou melhor". O site tem uma temática forte de Dota 2, com identidade gamer e seção de membros.

## Requisitos
- **Tecnologia:** Next.js 14+ (App Router), React, TypeScript, Tailwind CSS, Zustand (conforme o Tech Preset configurado via AIOS).
- **Design:** Manter a estética original (fundo preto, destaques vermelhos, imagens do jogo, estilo gamer/e-sports) mas torná-la muito mais moderna, premium e dinâmica (glow, glassmorphism, animações suaves).
- **Seções Principais:**
  - Hero Section (Cabeçalho com logo PDD de impacto).
  - Player de Música (flutuante e moderno).
  - Componente de Membros ("Quem são os PDD?") contendo Foto, Nome, botão de Biografia e link da Steam.
- **Melhorias em Relação ao Original:**
  - Performance otimizada (sem builders pesados).
  - Modal/Drawer moderno para a "Biografia" dos membros.
  - Totalmente responsivo e fluido.
  - Player de áudio com interface elegante.

## Tarefas (Checklist)
- [ ] Inicializar e configurar o projeto Next.js contornando as restrições de nomeação de diretório.
- [ ] Configurar Tailwind CSS, fontes globais e estilos base.
- [ ] Criar o Layout base (Header e Footer).
- [ ] Implementar a Hero Section.
- [ ] Criar os Cards de Membros e Modal de Biografia.
- [ ] Finalizar o Player de Áudio.
- [ ] Revisão visual e de responsividade.
- [x] Validação de Qualidade AIOS (Lint, Typecheck).

Status: Done

## Acceptance Criteria
- [x] Initial React/Next.js setup initialized locally
- [x] Extract core texts, avatars, external links, aesthetic from `darkgray-mallard-292767.hostingersite.com`
- [x] Replicate visual theme (Dota 2 clan, dark aesthetic, gamers vibe)
- [x] Enhance site interactivity (glassmorphism UI, modals)
- [x] Set footer copyright to "2026"
- [x] Apply a background loop video to Hero section with Logo centered
- [x] Use `AIOS` standard development flow rules
- [x] Sync steam profiles metrics and integrate them
- [x] Upload initial source-code structure into GitHub
