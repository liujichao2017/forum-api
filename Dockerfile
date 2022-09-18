FROM node:16
RUN npm config set  registry  http://registry.npm.taobao.org/
# create a directory to run docker
RUN mkdir -p /home/forum
# create a directory to save logs
RUN mkdir -p /home/forum/logs
WORKDIR /home/forum
ADD ./build /home/forum
ADD ./package.json /home/forum/package.json
COPY ./.env /home/forum/.env
COPY ./.env.development /home/forum/.env.development
COPY ./.env.production /home/forum/.env.production
RUN npm install
# pm2 is a important tool for start the nodejs project
RUN npm install pm2 -g
# make sure this port is the same with .env.production
EXPOSE 8888
#start the project by pm2
ENTRYPOINT NODE_ENV=production pm2-runtime start ./bin/www.js --name forum-api --output=./logs/forum-api-out.log --error=./logs/forum-api-error.log
