FROM node:20-alpine

WORKDIR /home/app/

COPY package.json package-lock.json ./

RUN npm install

COPY app.js app.js
COPY src/ src/
COPY public/ public/
COPY index.html index.html
COPY vite.config.js vite.config.js

RUN npm run build

# Start backend server
CMD ["npm", "start"]

EXPOSE 8001
