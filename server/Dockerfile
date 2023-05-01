FROM node:18

WORKDIR /app

COPY . /app

RUN npm install --legacy-peer-deps

RUN npm run build

EXPOSE 4000

CMD ["npm", "start"]
