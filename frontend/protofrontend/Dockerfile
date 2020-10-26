FROM node:15.0.1-alpine3.10

WORKDIR /opt/ng
COPY package.json package-lock.json ./
RUN npm install

ENV PATH="./node_modules/.bin:$PATH"

COPY . ./
RUN ng build --prod

RUN apk add nginx
RUN mkdir -p /run/nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx"]
