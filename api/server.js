const express = require("express");

const Char = require("../ff7/ff7-model");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.json({ api: "up" });
});

server.post("/character", (req, res) => {
  Char.add(req.body)
    .then((character) => {
      res.status(201).json(character);
    })
    .catch((err) => {
      res.status(400).json({ message: "incorrect data posted" });
    });
});

server.get("/character/:id", (req, res) => {
  Char.findById(req.params.id).then((found) => {
    res.status(200).json(found);
  });
});

server.get("/character", (req, res) => {
  Char.find().then((found) => {
    res.status(200).json(found);
  });
});

server.delete('/character/:id', (req, res) => {
  const { id } = req.params;

  Char.remove(id)
  .then(deleted => {
    if (deleted) {
      res.status(204).end();
    } else {
      res.status(404).json({ message: 'Could not find scheme with given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to delete scheme' });
  });
});

module.exports = server;
