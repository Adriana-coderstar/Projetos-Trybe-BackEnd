
FROM node:14-alpine As build

WORKDIR /todo-app

ADD node_modules.tar.gz .

COPY . .

EXPOSE 3001

CMD [ "npm", "start"]

