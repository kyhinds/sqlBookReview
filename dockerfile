# Specify the base image
FROM node:14

# Set the working directory in the Docker image
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json into the Docker image
COPY package*.json ./

# Install dependencies in the Docker image
RUN npm install

# Copy the rest of the application into the Docker image
COPY . .

# Expose port 3000 to be accessed outside the Docker container
EXPOSE 3000

# The command that starts our application
CMD [ "node", "index.js" ]
