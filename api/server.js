const express = require("express");

const Char = require('../ff7/ff7-model')

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.json({ api: "up" });
});

server.post("/character", (req, res) => {
  Char.add(req.body).then((character) => {
    res.status(201).json(character);
  });
});

server.delete("/character/:id", (req, res) => {
  Char.remove(req.params.id).then((removed) => {
    res.status(204).json({ removed: "character successfully deleted" });
  });
});

server.get('/character/:id', (req,res) => {
  Char.findById(req.params.id).then(found => {
    res.status(200).json(found)
  })
})

server.get('/character', (req,res)=>{
  Char.find().then(found => {
    res.status(200).json(found)
  })
})

module.exports = server;