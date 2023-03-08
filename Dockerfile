FROM node:lts-alpine as build-stage
RUN corepack enable && corepack prepare pnpm@latest --activate
WORKDIR /app
COPY package*.json ./
RUN pnpm install
COPY . .
RUN pnpm run build
