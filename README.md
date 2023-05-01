# Varadise Frontend

This is a React based project to serve as an information dashboard for the building metrics service

## Prerequisites

* [NodeJS](https://nodejs.org/en) - Built on V18 Hydrogen
* [pnpm](https://pnpm.io/) - For package management, npm will work however

## Development Quickstart

* Start the backend service
* `pnpm i`
* `pnpm run dev`

## Building

* Run `pnpm run build` to create the executable in project root

### Docker

There is a Dockerfile available for creating a production ready build of Varadise Frontend which includes only the built executable on top of [nginx alpine](https://hub.docker.com/_/nginx) exposing port `80`.

## Runtime configuration

The API SDK, by default is only expecting to use a backend at `localhost:8080` for this exercise. Modify the OpenAPI spec and / or API instantiation to use a different `BASE_URL`

## Customisation

### App Icon

[real fav icon generator](https://realfavicongenerator.net/) was used to generate the app icons. It caters to all platforms and situations very well, you are encouraged to make use of it when changing from the alien icon