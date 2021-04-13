FROM node:14
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm i
COPY . .
EXPOSE 3000
RUN npm i pm2
RUN npm run build
CMD ["pm2", "start", "main.js", "--name", "my-app"]
