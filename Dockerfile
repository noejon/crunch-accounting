FROM node:12-slim AS builder

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install --production --silent

COPY . ./

RUN npm run build

FROM nginx:stable-alpine
COPY --from=builder /usr/src/app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]