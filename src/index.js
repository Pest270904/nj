const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

// HTTP logger
app.use(morgan("combined"));

// Template engine
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

// Render page
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/page1", (req, res) => {
  res.render("page1");
});

app.get("/test", (req, res) => {
  res.render("test");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
