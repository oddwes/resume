FROM node:14.16.0-alpine3.10 as build
WORKDIR /app
COPY . /app/
RUN npm install
RUN npm install react-scripts@3.0.1 -g
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]