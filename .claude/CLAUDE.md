# CLAUDE.md — PDD

@AGENTS.md

## Projeto

Fan site do clã "Parças Do Dota" (PDD) — grupo de amigos, Dota 2, memória coletiva.

## Stack

- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- Sem banco de dados

## Convenções

- Idioma do código: inglês
- Idioma da interface: português (BR)
- Componentes React como funções
- Imports absolutos quando possível

## Cofre / memória persistente

Path: `/home/zenfoco/projects/cofre/PDD/PDD`

Separação de responsabilidades:
- repo = runtime real
- `docs/stories/` = histórico e critérios de aceite
- cofre = sessões, decisões, estado acumulado

## Regras

- NUNCA commit/push sem ordem explícita do usuário
- NUNCA adicionar features além do pedido
- Priorizar simplicidade — projeto hobby
