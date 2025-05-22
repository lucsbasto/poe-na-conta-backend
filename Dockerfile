# Dockerfile

FROM node:20

WORKDIR /app

COPY . .

ENV NODE_ENV=production

# instala dependências sem rodar scripts (ex: husky prepare)
RUN pnpm install --frozen-lockfile --ignore-scripts

# compila o projeto
RUN pnpm run build

CMD ["node", "dist/main"]
