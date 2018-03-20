FROM node:6-alpine
RUN mkdir -p /usr/app
COPY . /usr/app
WORKDIR /usr/app
CMD npm start -s
