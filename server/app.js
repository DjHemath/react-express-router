const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(__dirname + "/build"));

app.get("/ping", (req, res) => {
  res.send("pong!");
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

app.listen(5000, () => console.log("Server is Up!"));
