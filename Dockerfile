FROM node:20-alpine
RUN npm install --location=global pnpm
WORKDIR /home/node
RUN chown -R node:node .
USER node

# These arguments are passed by github actions
ARG SERVICE_VERSION=non-ci-build
ARG SERVICE_REVISION=non-ci-build
ARG SERVICE_BUILDTIME=non-ci-build
ENV SERVICE_VERSION $SERVICE_VERSION
ENV SERVICE_REVISION $SERVICE_REVISION
ENV SERVICE_BUILDTIME $SERVICE_BUILDTIME

ENV SERVICE_NAME backend

COPY --chown=node:node ./dist ./

RUN ls ./
#RUN pnpm install 

ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000

CMD [ "node", "main.js" ]
