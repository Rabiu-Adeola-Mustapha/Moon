From node:14.17.3-buster as build

WORKDIR code

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install



CMD ["npm", "run", "start"]

FROM nginix:1.12-alpine as prod

COPY --from=build /code/build /usr/share/nginix


EXPOSE 80

CMD ["nginx", "-g", "daemon off:"]