# Dockerfile

FROM node:14

# Install dos2unix
RUN apt-get update && apt-get install -y dos2unix

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# Ensure wait-for-it.sh uses Unix line endings
RUN dos2unix /usr/src/app/wait-for-it.sh

# Expose the port the app runs on
EXPOSE 3000

# Grant execute permission for wait-for-it.sh
RUN chmod +x /usr/src/app/wait-for-it.sh

# Command to run the app
CMD ["./wait-for-it.sh", "db:3306", "--", "node", "app.js"]
