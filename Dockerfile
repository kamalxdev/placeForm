#  build stage
FROM node:20 as Builder
WORKDIR /build
COPY package*.json ./
RUN npm ci
COPY . .
ARG NEXT_PUBLIC_WEBSITE_URL
ARG MONGO_URL
RUN npm run build


# production stage

FROM node:20-alpine as Production
WORKDIR /app
COPY --from=Builder /build ./
CMD ["npm", "run", "start"]