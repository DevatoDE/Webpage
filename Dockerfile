FROM node:14

WORKDIR /app

COPY . .

EXPOSE 8000

CMD ["npm", "run", "dev"]