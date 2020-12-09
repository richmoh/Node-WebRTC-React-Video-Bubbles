const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Its working");
});

app.listen(port, () => {
  console.log("Server started on port", port);
});

module.exports = app;
