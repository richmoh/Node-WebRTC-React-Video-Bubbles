const express = require("express");
const app = express();
const port = 8080;
const expressNunjucks = require("express-nunjucks");
const isDev = app.get("env") === "development" || true;

app.set("views", __dirname + "/../" + "templates");

const njk = expressNunjucks(app, {
  watch: isDev,
  noCache: isDev,
  autoescape: true,
});

app.get("/", (req, res) => {
  res.render("home", { roomId: req.query.id });
});

app.get("/status", (req, res) => {
  res.render("status", { port: port });
});

app.listen(port, () => {
  console.log("Server started on port", port);
});

module.exports = app;
