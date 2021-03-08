FROM nginx:alpine
RUN echo builds/oddwes-main/resume/*
COPY ./builds/oddwes-main/resume/* /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]