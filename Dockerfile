# Base Image Node 10
FROM node:10

# Create folder to put project in
RUN mkdir serviceFolder

# Set the working directory
WORKDIR /serviceFolder

# Copy the content of the current directory into the working directory
COPY . /serviceFolder

# install all dependencies in package.json
RUN npm install

# Tell it the port number this container should expose
EXPOSE 7000

# run the commands
CMD ["npm", "start"]


