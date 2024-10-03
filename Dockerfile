# Use an official Node.js runtime as a parent image
FROM node:22-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json .
COPY *config.js .

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 5000

ENV HOST=0.0.0.0

# Start the app
CMD [ "npm", "run", "dev", "--", "--host", "0.0.0.0"]