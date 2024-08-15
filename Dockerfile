# uses node:22-alpine3.20 as the base image for the ReactJS application
FROM node:22-alpine3.20 AS build

# Creating the working directory named `app`
WORKDIR /app

# Copying all the tools and dependencies in the package.json file to the working directory `app`
COPY package.json .

#Installing all the tools and dependencies in the container
RUN npm install

#Copying all the application source code and files to the working directory `app`
COPY . .

#Exposing the container to run on this port
EXPOSE 3000

#Start the React App
CMD ["npm", "start"]