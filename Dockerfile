FROM node

WORKDIR /app
COPY package*.json .
RUN npm install

COPY ./src /app/src
COPY ./index.js /app/

EXPOSE 4000


CMD ["npm","run","dev"]