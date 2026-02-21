# Usuário Story: Expansão da Lore do Clã PDD

ID: 002-pdd-lore-expansion
Status: To Do

## Contexto
O site base do PDD foi clonado com sucesso. Agora precisamos aproveitar os arquivos ricos de memória do Telegram e do "Tornobot" para transformar o site em um verdadeiro santuário contando a história profunda do clã, suas pérolas internas e divisões geográficas.

## Requisitos
- **Criar seção "Mural de Pérolas (Hall da Fama)":** Destacar frases exclusivas como "Cadê sua BKB, Coringa?", "Meu primooo porraa!!" e as famosas "18 Mil Horas Sem Bota".
- **Origem do Nome (Dicionário Hacker):** Um componente interativo ou *glitch text* que alterna "Pau Dentro Direto" e "Perde Direito Direto".
- **Estatuto Detalhado (/sobre):** Criar uma página dedicada ou modal contando as biografias unidas reveladas pela memória da AI OpenClaw.
- **Integração Visual com Tornobot:** Citar a presença do robô (ID Telegram `-1002334042119`).

## Restrições (AIOS Architecture)
- Seguir fielmente o padrão arquitetural do repositório em TypeScript/React puro no Next.js App Router (App Directory).
- Componentes modulares utilizando TailwindCSS.
- Aplicar princípios Glassmorphism para consistência estética com os Cards já prontos.
- Realizar validação de tipagem e linters (quality gate) antes dos commits.

## Critérios de Aceite
- [ ] Nova página `/sobre` ou nova Seção de Lore desenhada na Home.
- [ ] O Mural de Pérolas exibe citações famosas do Clã PDD.
- [ ] O significado ambíguo da sigla (PDD) ganha destaque dinâmico na Interface.
- [ ] O código passa ileso pelo build e validações do painel do AIOS (`npm run lint`, `tsc --noEmit`).
