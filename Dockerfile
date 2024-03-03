# Use the official Node.js 14 image as the base image
FROM node:14

# Create a directory for the application
WORKDIR /usr/src/app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port on which your app runs
EXPOSE 3000

# Command to run the application
CMD ["node", "app.js"]
