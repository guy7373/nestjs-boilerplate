## Description

Service Description.

## Installation

To use the required Node.js version, it is recommended to use `nvm` (Node Version Manager).
```bash
$ nvm use
```
Then install the required dependencies.
```bash
$ yarn install
```

## Running the app

```bash
$ yarn start
```

## Test

```bash
$ yarn test

# test coverage
$ yarn test:cov
```

The tests will spin up a local database, run the migrations, and run the tests against the local database.
This requires Docker to be installed on your machine.

### Create a new migration

```bash
$ yarn db:migrate-create my first migration
```

File `xxx_my-first-migration.js` in `migrations` folder (which will be created if not exist).

`node-pg-migrate` instructions [here](https://salsita.github.io/node-pg-migrate)

## Logger

Pino is used as the main logger.
To use the logger, inject it where it is needed.
ex.:
import { Logger } from 'nestjs-pino';
constructor(private readonly logger: Logger) {}

## API Documentation

API documentation is generated using Swagger.
