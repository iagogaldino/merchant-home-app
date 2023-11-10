# base image
FROM node:latest

# install chrome for protractor tests
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
RUN apt-get update && apt-get install -yq google-chrome-stable

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli@latest

# add app
COPY . /app

# start app
CMD ng serve --host 0.0.0.0 --disableHostCheck
# Comando para criar imagem
# docker build -t merchant-home-app .
# Comando para gerar um container
# docker run -v ${PWD}:/app -v /app/node_modules -p 4200:4200 --rm example:dev
