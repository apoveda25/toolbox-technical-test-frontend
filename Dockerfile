FROM node:16-alpine
WORKDIR /srv/toolbox
RUN /bin/sh -c "apk add --no-cache bash"
COPY . .
RUN yarn install
EXPOSE 3000
CMD ["yarn", "run", "start"]
