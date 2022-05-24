FROM node:14

WORKDIR /Users/flo/Development/Webpage/app

COPY ./package.json ./
RUN npm install
COPY ./ .
RUN npm run dev

ENV NODE_ENV=production

CMD ["npm", "run", "dev"]