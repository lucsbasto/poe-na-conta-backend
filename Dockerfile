# Etapa 1: build
FROM node:20-alpine AS builder

WORKDIR /app

# Ativa o corepack para usar PNPM
RUN corepack enable && corepack prepare pnpm@9.0.0 --activate

COPY . .

# Garante que as devDependencies sejam instaladas
ENV NODE_ENV=development
RUN pnpm install --frozen-lockfile

# Compila a aplicação
RUN pnpm run build

# Etapa 2: imagem final de produção
FROM node:20-alpine AS production

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@9.0.0 --activate

COPY --from=builder /app/package.json ./
COPY --from=builder /app/pnpm-lock.yaml ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

# Apenas produção
ENV NODE_ENV=production

CMD ["node", "dist/src/main"]
