const express = require("express");

const app = express();

app.use("/users", (req, res, next) => {
  console.log("You went to '/users'");
  res.send("<h1>Display Users Here</h1>");
});

app.use("/", (req, res, next) => {
  console.log("You went to '/'");
  res.send("<h1>Home Page</h1>");
});

app.listen(3000);
