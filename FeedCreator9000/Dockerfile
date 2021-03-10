FROM node:15.11 AS base

EXPOSE 4000 

FROM node:15.11 AS build

COPY ./ ./

RUN npm install

RUN npm run build

FROM base AS final

COPY --from=build package.json package-lock.json ormconfig.json ./build ./

RUN npm install --only=prod

CMD ["node","index.js"]