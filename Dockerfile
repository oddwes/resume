FROM nginx:alpine
RUN ls kaniko/*
RUN ls builds/oddwes-main/resume/*
COPY ./builds/oddwes-main/resume/build/index.html /usr/share/nginx/html/
RUN rm /etc/nginx/conf.d/default.conf
COPY ./builds/oddwes-main/resume/nginx.conf /etc/nginx/conf.d
EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]