const { Client } = require('pg');
const connectionString = 'postgres://postgres:123456@localhost:5432/mydb';
const client = new Client({
  connectionString: connectionString,
});

client.connect();

// client.query('SELECT * FROM Employee where id = $1', [1], function (
//   err,
//   result
// ) {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result.rows);
// });
