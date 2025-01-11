# Use an official Node.js image with a newer version
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose port 3000 and start the application
EXPOSE 3000
CMD ["npm", "run", "dev"]
