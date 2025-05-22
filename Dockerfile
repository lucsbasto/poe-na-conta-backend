# Etapa de build
FROM node:20-alpine AS builder

WORKDIR /app

# Habilita e instala pnpm via corepack
RUN corepack enable && corepack prepare pnpm@9.0.0 --activate

# Copia os arquivos do projeto
COPY . .

# Instala dependências, mas ignora scripts (como husky)
RUN pnpm install --frozen-lockfile --ignore-scripts

# Compila a aplicação
RUN pnpm run build

# Etapa final (imagem de produção enxuta)
FROM node:20-alpine AS production

WORKDIR /app

# Habilita e instala pnpm novamente
RUN corepack enable && corepack prepare pnpm@9.0.0 --activate

COPY --from=builder /app /app

ENV NODE_ENV=production

# Instala apenas dependências de produção
RUN pnpm install --prod --ignore-scripts

CMD ["node", "dist/main"]
