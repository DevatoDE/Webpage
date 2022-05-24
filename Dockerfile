FROM node:14

WORKDIR /Users/flo/Development/Webpage/app

COPY ./package.json ./
RUN npm install
COPY ./ .
RUN npm run build

ENV NODE_ENV=production

CMD ["npm", "run", "start"]