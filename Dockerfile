FROM node:20-alpine

LABEL maintainer="Gabriel Sousa"

WORKDIR /app

COPY package.json .

RUN npm install --production

COPY src/ ./src/

EXPOSE 3000

CMD ["node", "src/app.js"]