FROM node:20-alpine
RUN npm install --location=global pnpm
WORKDIR /home/node/app
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
ENV SENTRY_DSN https://d84123a75ab3423d8abb183046a59a1e@o1190684.ingest.sentry.io/4504006721273856

COPY --chown=node:node ./dist/apps/backend-service ./

COPY --chown=node:node ./.npmrc ./
RUN pnpm install --prod --ignore-scripts

ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000

CMD [ "node", "main.js" ]