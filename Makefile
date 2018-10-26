.PHONY: build

SHELL := /bin/bash
CONTAINERNAME=uplift_frontend
IMAGENAME=uplift_frontend_image

build:
	cp -r package.json ./build
	docker build -t $(IMAGENAME) ./build

up:
	docker-compose up -d frontend || echo 'Already up!'

down:
	docker-compose down

enter:
	docker exec -it $(CONTAINERNAME) /bin/bash

rsync:
	docker run -v $(CURDIR)/build/environment/.:/environment/ $(IMAGENAME) /bin/bash -c '/opt/rsync_packages.sh'
