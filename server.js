const express = require("express");
const helmet = require("helmet");

//const recipeRouter = require("./routers/recipeRouter");
const server = express();

server.use(helmet());
server.use(express.json());
//server.use("/api/recipes",recipeRouter)

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

module.exports = server;
