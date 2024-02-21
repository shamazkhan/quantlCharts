# build stage
FROM node:16 as build-stage
WORKDIR /app
COPY package.json ./
COPY tsconfig.json ./

RUN yarn install
COPY . .

EXPOSE ${PORT:-8080}

#RUN npm i --force
#RUN npm install -g yarn


# dev
#FROM build-stage as dev-build-stage

#ENV NODE_ENV development

#CMD ["yarn", "dev"]

# Production
FROM build-stage as prod-build-stage

ENV NODE_ENV production

CMD ["yarn", "start"]