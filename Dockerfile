# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /app

COPY . .

# Instala tudo (incluindo devDeps)
ENV NODE_ENV=development
RUN pnpm install --frozen-lockfile
RUN pnpm run build

# Stage 2: Runtime
FROM node:20-alpine AS runtime
WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules

ENV NODE_ENV=production
CMD ["node", "dist/main"]
