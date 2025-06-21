# 1. Fázis: Buildeljük a React appot
FROM node:18 AS frontend

WORKDIR /kosz_web/client
COPY client/package*.json ./
RUN npm install
COPY client ./
RUN npm run build

# 2. Fázis: Backend + frontend kiszolgálás
FROM node:18

WORKDIR /kosz_web

# Backend függőségek
COPY server/package*.json ./server/
RUN cd server && npm install

# Backend forráskód
COPY server ./server

# Frontend build másolása a backendbe
COPY --from=frontend /kosz_web/client/dist ./client/dist

# .env fájlt ha kell, add hozzá majd docker-compose-ból
EXPOSE 3000

# App indítása
CMD ["node", "server/index.js"]