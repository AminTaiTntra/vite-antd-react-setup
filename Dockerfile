# Stage 1: Install dependencies
FROM node:18.14.2 as dependencies
WORKDIR /app
COPY package.json yarn.lock ./
RUN if [ -f yarn.lock ]; then rm -rf node_modules; fi && yarn install

# Stage 2: Build the application
FROM dependencies as build
COPY . .
RUN yarn run build

# Stage 3: Final image
FROM node:18.14.2
WORKDIR /app
COPY --from=build /app/build ./build
COPY --from=dependencies /app/node_modules ./node_modules
COPY .env .env
RUN npm i -g serve
CMD ["serve", "-s", "build"]