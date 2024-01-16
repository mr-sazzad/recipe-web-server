# Node.js base image
FROM node:20.9.0-alpine

# Set working directory
WORKDIR /recipe/code

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application source code
COPY . .

# Prisma generate
RUN npx prisma generate

# Build the application
RUN npm run build

# Expose port 8080
EXPOSE 8080

# Start the application
CMD ["npm", "start"]