const createPool = require('@databases/pg');
const {sql} = require('@databases/pg');

// set port, listen for requests
const SQLSCRIPT = process.env.SQLSCRIPT || '';

// process.env.PGUSER
// process.env.PGPASSWORD
// process.env.PGHOST
// process.env.PGPORT
// process.env.PGDATABASE


const createConnectionPool = require('@databases/pg');

const db = createConnectionPool({
  onQueryStart: (_query, {text, values}) => {
    console.log(
      `${new Date().toISOString()} START QUERY ${text} - ${JSON.stringify(
        values,
      )}`,
    );
  },
  onQueryResults: (_query, {text}, results) => {
    console.log(
      `${new Date().toISOString()} END QUERY   ${text} - ${
        results.length
      } results`,
    );
  },
  onQueryError: (_query, {text}, err) => {
    console.log(
      `${new Date().toISOString()} ERROR QUERY ${text} - ${err.message}`,
    );
  },
});

db.query(sql.file(SQLSCRIPT)).catch(ex => {
  console.error(ex);
  process.exitCode = 1;
}).then(() => db.dispose());