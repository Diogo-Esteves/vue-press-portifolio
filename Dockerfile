# build process
FROM node:lts-alpine as build-stage
RUN mkdir /app
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN npm install
RUN npm install -g @vue/cli
COPY . /app
RUN yarn add -D vuepress@next
# RUN npm run build

# start app
CMD ["yarn", "docs:dev"]
