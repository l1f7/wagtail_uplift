.PHONY: build

SHELL := /bin/bash
CONTAINERNAME=uplift_frontend
IMAGENAME=uplift_frontend_image

build:
	cp -r package.json ./build
	# Copy package-lock.json if it exists
	[ -f package-lock.json ] && cp -r package-lock.json ./build || true
	docker build -t $(IMAGENAME) ./build

up:
	docker-compose up -d frontend || echo 'Already up!'

down:
	docker-compose down

enter:
	docker exec -it $(CONTAINERNAME) /bin/bash
