# estágio de compilação
FROM node:lts-alpine
WORKDIR /app
RUN apk add nodejs
RUN apk add yarn
# COPY package*.json ./
COPY . .
RUN yarn install
# RUN yarn build
RUN yarn global add @vue/cli
RUN yarn global upgrade --latest @vue/cli

# estágio de execução 
FROM nginx:stable-alpine as production-stage
# COPY /app/chap_5/index.html /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
