# Dockerfile

FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# Expose the port the app runs on
EXPOSE 3000

COPY wait-for-it.sh /usr/src/app/wait-for-it.sh

# Command to run the app
CMD ["./wait-for-it.sh", "db:3306", "--", "node", "app.js"]
