.PHONY: build

SHELL := /bin/bash
CONTAINERNAME=uplift_frontend
IMAGENAME=uplift_frontend

build:
	# cp -r package.json ./build
	# # Copy package-lock.json if it exists
	# [ -f package-lock.json ] && cp -r package-lock.json ./|| true
	docker build -t $(IMAGENAME) .

up:
	docker run -d -p 1337:1337 -v $(CURDIR):/app -v /app/node_modules --name $(CONTAINERNAME) $(IMAGENAME) /bin/bash -c 'while true; do echo hi; sleep 1; done;' || echo 'Already up!'

down: ## Stop the container
	docker stop $(CONTAINERNAME) || echo 'No container to stop'

enter: ## Enter the running container
	docker exec -it $(CONTAINERNAME) /bin/bash

clean: down ## Remove the image and any stopped containers
	docker rm $(CONTAINERNAME) || echo 'No container to remove'
