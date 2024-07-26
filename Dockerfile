FROM node:20.12.2-alpine3.18 as base

# All deps stage
FROM base as deps
WORKDIR /app_new
ADD package.json package-lock.json ./
RUN npm ci

# Production only deps stage
FROM base as production-deps
WORKDIR /app_new
ADD package.json package-lock.json ./
RUN npm ci --omit=dev

# Build stage
FROM base as build
WORKDIR /app_new
COPY --from=deps /app_new/node_modules /app_new/node_modules
ADD . .
RUN node ace build --ignore-ts-errors

# Production stage
FROM base
ENV NODE_ENV=production
WORKDIR /app_new
COPY --from=production-deps /app_new/node_modules /app_new/node_modules
COPY --from=build /app_new/build /app_new
EXPOSE 3333
CMD ["node", "./bin/server.js"]
