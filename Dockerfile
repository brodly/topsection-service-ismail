# Base Image Node 10
FROM node:10

# Set the working directory
WORKDIR /usr/app/

# Copy the content of the current directory into the working directory
COPY . . 

# install all dependencies in package.json
RUN npm install

RUN ( cd client && npm install & cd ../)

# Tell it the port number this container should expose
EXPOSE 7777

# run the commands
CMD ["npm", "start"]


