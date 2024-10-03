# Use an official Node.js runtime as a parent image
FROM node:20.9.0-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Svelte app
RUN npm run build

# Expose the port the app runs on
EXPOSE 5000

# Start the app
CMD ["npm", "run", "start"]