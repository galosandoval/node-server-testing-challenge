const express = require("express");

// const usersRouter = require("../users/users-router.js");

const server = express();

server.use(express.json());

// server.use("/api/users", usersRouter);

server.get("/", (req, res) => {
  res.json({ api: "up" });
});

module.exports = server;