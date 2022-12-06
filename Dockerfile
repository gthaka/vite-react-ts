FROM node:lts-alpine

WORKDIR /usr/src/app

COPY package.json ./

RUN npm i -g pnpm
RUN pnpm i --omit=dev
# RUN npm cache clean --force

COPY . .

RUN pnpm run build 

EXPOSE 4173

CMD [ "pnpm", "run","preview" ]