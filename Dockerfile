FROM node:10-slim
MAINTAINER Lift Interactive <team@liftinteractive.com>

# Set a term for terminal inside the container, can't clear without it
ENV TERM xterm-256color

# Prefix path with global node_modules folder
# This allows npm package binaries to be available everywhere
ENV PATH /app/node_modules/.bin:$PATH

# Update and install
RUN apt-get update && apt-get install -y \
    # git may be required for pulling npm packages from a repo
    git \
    # bzip2 required for phantomjs-prebuild (dependency of svg-sprite)
    bzip2

# Add the project requirements
# This will add the package.json and package-lock.json if it exists
ADD package*.json /app/

# Install the requirements
RUN /bin/bash -c 'cd /app && npm install && npm cache clean --force'

# The code should be symlinked to this directory
WORKDIR /app

# Expose the 1337 port
EXPOSE 1337
