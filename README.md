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
Coming soon...
