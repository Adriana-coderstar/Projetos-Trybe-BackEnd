FROM mjgargani/puppeteer:trybe1.0 AS build

WORKDIR /todo-app

ADD node_modules.tar.gz .

COPY . .

CMD [ "npm", "test"]





