# AGENTS.md — PDD

Fan site do clã Parças Do Dota (PDD).

## Memória do projeto

O PDD usa um sistema de três camadas:

1. **Código** — `/home/zenfoco/projects/own/pdd`
   - fonte da verdade para o comportamento real
2. **Stories** — `docs/stories/`
   - histórico de desenvolvimento e critérios de aceite
3. **Cofre** — `/home/zenfoco/projects/cofre/PDD/PDD`
   - sessões, decisões, estado atual, perguntas abertas

Antes de qualquer trabalho relevante, consultar:
- `docs/stories/` para entender o que foi feito e o que está pendente
- o cofre para contexto acumulado

## Stack

- Next.js 14+ (App Router), TypeScript, Tailwind CSS
- Sem banco de dados — dados estáticos
- Mídia em `public/media/`

## Comandos

- `npm run dev` — servidor de desenvolvimento
- `npm run lint` — linting
- `npm run build` — build de produção

## Regras

- NUNCA commit/push sem ordem explícita do usuário
- NUNCA adicionar features além do pedido
- Priorizar simplicidade — é um site de hobby
- Cada entrega deve funcionar — não deixar código quebrado
