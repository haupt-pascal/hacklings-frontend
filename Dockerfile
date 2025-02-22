FROM --platform=linux/amd64 oven/bun:1 AS base
WORKDIR /usr/src/app

COPY . .

RUN bun install

ENV NODE_ENV=production
RUN bun run build

# Production stage
FROM --platform=linux/amd64 oven/bun:1
WORKDIR /usr/src/app
COPY --from=base /usr/src/app/.output .
COPY --from=base /usr/src/app/node_modules node_modules
COPY package.json .
COPY nuxt.config.ts .

USER bun
ENV HOST=0.0.0.0
EXPOSE 3000
ENTRYPOINT [ "bun", "run", "server/index.mjs" ]
