winston-transport-pg
====================
A PostgreSQL [Transport](https://github.com/winstonjs/winston/blob/master/docs/transports.md)
for [Winston](https://github.com/winstonjs/winston) Logger (v3.x).

Uses the [node-postgres](https://node-postgres.com) package, and does
not require native binding (`libpq`) to be installed on the host
machine.

Inspired by [winston-pg-native](https://github.com/paulelie/winston-pg-native).

Prerequisite
------------
You must have a table that matches the following description:

```sql
CREATE TABLE logs (
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT now(),
  level VARCHAR,
  message VARCHAR,
  meta JSON
);
```

Installation
------------
```
npm i winston-transports-pg
```

Use
---
To create an instance of the PostgresTransport, we need two things:

1. A `pg` Pool instance
2. An IPostgresTransportOptions object

### IPostgresTransportOptions
Below is the interface for the `IPostgresTransportOptions` object.

```typescript
interface IPostgresTransportOptions {
  level?: string;
  tableName: string;
}
```

### Creating an Instance
```typescript
import { Pool } from 'pg';
import { createLogger, format } from 'winston';

// First create a Pool instance.
const pool = new Pool('postgres://username:password@hostname:5432/database');

// Set up our options.
const opts = {
  level: 'info',
  tableName: 'logs',
};

// Create the instance.
const postgresTransport = new PostgresTransport(pool, opts);

// Add Transport to Logger
const logger = createLogger({
  format: format.json(),
  transports: [ postgresTransport ]
});
```
