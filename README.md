# nodejs-runsqlscript

Simple nodejs container - intention is to use it to initialise databases with scripts using a kubernetes job.  Doesn't sound like much work.

Uses: https://www.atdatabases.org/docs/pg

Environment Variables:

```
// process.env.PGUSER
// process.env.PGPASSWORD
// process.env.PGHOST
// process.env.PGPORT
// process.env.PGDATABASE
// process.env.SQLSCRIPT
```