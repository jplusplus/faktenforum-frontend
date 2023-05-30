FROM node:16.20-alpine as builder

WORKDIR /opt/faktenforum-frontend

COPY package.json package-lock.json ./
RUN npm ci

COPY . ./
RUN NODE_ENV=production npx vite build

FROM nginx:1.23.3-alpine

ARG REVISION

ENV APP_REVISION=${REVISION}

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder --chown=nginx:nginx /opt/faktenforum-frontend/dist/ /usr/share/nginx/html
