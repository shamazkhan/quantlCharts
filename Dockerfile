# build stage
FROM node:16 as build-stage

COPY . ./app

WORKDIR /app

RUN npm i --force
#RUN npm install -g yarn


# EXPOSE 3001
#EXPOSE 21600

# dev
FROM build-stage as dev-build-stage

ENV NODE_ENV development

CMD ["yarn", "dev"]

# Production
FROM build-stage as prod-build-stage

ENV NODE_ENV production

CMD ["run", "start"]
