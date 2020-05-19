# Specifies where to get the base image (Node v12 in our case) and creates a new container for it
FROM node:12-alpine

# Set working directory. Paths will be relative this WORKDIR.
WORKDIR /app

# Install dependencies
COPY . ./
RUN npm install

# Copy so
# Source files from host computer to the container
COPY . .

# Build the app
RUN npm run test

# Specify port app runs on
EXPOSE 5000

# Run the app
CMD [ "npm", "start" ]
