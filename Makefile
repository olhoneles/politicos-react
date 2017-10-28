NPM ?= $(shell which npm)
YARN ?= $(shell which yarn)
PKG_MANAGER ?= $(if $(YARN),$(YARN),$(NPM))

setup:
	@$(PKG_MANAGER) install

run:
	@$(PKG_MANAGER) run start

build:
	@$(PKG_MANAGER) run build

lint:
	@$(PKG_MANAGER) run lint

test:
	@$(PKG_MANAGER) run test
