FROM node:20-alpine AS development
ENV NODE_ENV development
COPY . /app
WORKDIR /app
RUN npm install

EXPOSE 3000
CMD ["npm", "start"]

# FROM node:14-alpine AS production
# ENV NODE_ENV production
# WORKDIR /app
# COPY package.json package-lock.json ./
# RUN npm install --production

# COPY . .
# EXPOSE 80
# CMD ["npm", "start"]