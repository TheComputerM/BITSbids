# Prerequisites

- Java JDK 17
- Nodejs and NPM
- Docker

> The project uses [Quarkus](https://quarkus.io/) for the server and [Astro](https://astro.build/) for the client.

Thats it

## Setup

- run `docker compose --profile dev up -d` to spin up the containers.
    - run `docker compose --profile dev stop` to stop the containers.
    - run `docker compose --profile dev down` to delete the containers.
    - run `docker compose --profile dev restart` to reset the containers.
- postgres database will be on **db:5432**.
- you can visit `localhost:5433` for the Adminer GUI (a visual interface for postgres).

## Backend

1. cd into the `backend` folder
2. Run `./mvnw compile quarkus:dev`
    - It will take some time you run this for the first time as maven downloads all the dependencies.
    - Server will be on port **8080**

## Frontend

1. cd into the `frontend` folder
2. Run `npm install`
    - It will install the dependencies for building and running the frontend
3. Run `npm run dev`
    - The website will be on port **3000**