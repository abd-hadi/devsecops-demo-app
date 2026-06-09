FROM node:22-alpine

RUN npm install -g npm@latest

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY src ./src
COPY public ./public

EXPOSE 3000

USER node

CMD ["npm", "start"]
