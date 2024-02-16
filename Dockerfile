# build stage
FROM node:16 as build-stage
WORKDIR /app
#COPY . ./app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
CMD ["yarn", "start"]
docker build -t quantlCharts .

docker run -d -p 3000:3000 quantlCharts
#RUN npm i --force

# dev
#FROM build-stage as dev-build-stage
#ENV NODE_ENV development
#CMD ["yarn", "dev"]

# Production
#FROM build-stage as prod-build-stage
#ENV NODE_ENV production
#CMD ["run", "start"]
