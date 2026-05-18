# Pulse

Landing page SaaS premium criada como o primeiro projeto do portfÃ³lio.

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion

## Como rodar

1. Instale as dependÃªncias com `npm install`
2. Rode o projeto com `npm run dev`

## PrÃ³ximas melhorias sugeridas

- menu mobile
- dark/light mode
- animaÃ§Ãµes com scroll mais avanÃ§adas
- screenshots reais do produto
- pÃ¡gina secundÃ¡ria de produto ou recursos
## Publicar no GitHub Pages

Este projeto esta preparado para GitHub Pages com export estatico do Next.js.

`ash
npm install
npm run build:static
`

Para publicar:

1. Envie o projeto para um repositorio no GitHub.
2. Garanta que a branch principal se chama main.
3. Em Settings > Pages, selecione GitHub Actions em Build and deployment.
4. Faca push para main.

O workflow .github/workflows/deploy.yml gera a pasta out/ e publica automaticamente.