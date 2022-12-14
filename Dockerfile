#stage 1
FROM node:latest as node
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

#stage 2 
FROM nginxinc/nginx-unprivileged
COPY --from=node /app/dist/neueda-angular-project /usr/share/nginx/html

