FROM node:20

#Create app directory
WORKDIR /usr/src/app

#Install app dependencies
COPY package*.json ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build the application
RUN yarn run build

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["yarn", "run","start:prod"]