FROM node:14-slim

WORKDIR /app

COPY . .

RUN npm install

ENTRYPOINT ["npm","start"]
