# AltranFrontendAssessment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.3.

## Instructions for running the project

The project has a virtual environment made with Docker. 
The environment can be run in two different ways, with Docker or install necessary packages in your development environment.

## Instructions for running the project with Docker

### Requirements 

- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/) Docker >= 17.05.0
- [Docker Compose](https://docs.docker.com/compose/) Docker-Compose >= 1.8.0

### Development

1. Go into the project folder and execute the `docker-compose up --build` command. This command will install all necessary packages into the container and leave the server ready to be used
2. Open the browser at http://localhost/
3. To enter the container run `docker exec -it (container name) bash` command

## Instructions for running the project in the local enviroment

### Requirements 

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node >= 6.x.x, npm >= 3.x.x

### Development

1. Go to `AltranFrontendAssessment` folder
2. Run `npm install` to install the server dependencies.
3. Run `npm start` to run the server in development mode.
4. Open the browser at http://localhost:4200/

## Frameworks & Libraries

All libraries used come by default when creating a project with Angular CLI
## Build

Run `npm build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).