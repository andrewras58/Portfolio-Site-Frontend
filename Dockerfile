# uses node:22-alpine3.20 as the base image for the ReactJS application
FROM node:22-alpine3.20 as build

# Creating the working directory named `app`
WORKDIR /app

# Copying all the tools and dependencies in the package.json file to the working directory `app`
COPY package.json .

#Installing all the tools and dependencies in the container
RUN npm install

#Copying all the application source code and files to the working directory `app`
COPY . .

# Build the React app
RUN npm run build

# Use an official Nginx runtime as a parent image
FROM nginx:1.27.0-alpine-slim

# Copy the nginx.conf to the container
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Copy the React app build files to the container
COPY --from=build /app/build /usr/share/nginx/html

#Exposing the container to run on this port 80
EXPOSE 80

#Command to start the Docker container for the backed server application
CMD ["nginx","-g","daemon off;"]
