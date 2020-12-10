const express = require("express");
const app = express();
const port = 8080;
const expressNunjucks = require("express-nunjucks");
const { Server } = require("./Server");
const isDev = app.get("env") === "development" || true;

app.set("views", __dirname + "/../" + "templates");

const njk = expressNunjucks(app, {
  watch: isDev,
  noCache: isDev,
  autoescape: true,
});

const server = new Server(app, port);
server.start();

module.exports = app;
