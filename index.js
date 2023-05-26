const express = require("express");
const app = express();
const { Pool, Client } = require("pg");

// const connectionString = "postgressql://localhost:5432/students";

const client = new Client({
  //   connectionString: connectionString,
  host: "localhost",
  user: "user",
  port: 5432,
  password: null,
  database: "students",
});

client.connect();
client.query("SELECT * FROM PERSON", (err, res) => {
  if (err) {
    console.log(err);
  }
  console.log(res.rows);
  client.end;
});

app.listen(5000, () => {
  console.log("listening on 5k");
});
