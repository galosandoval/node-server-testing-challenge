const db = require("../data/connection");

module.exports = {
  add,
  find,
  findById,
  remove
};

async function add(user) {
  return db("ff7")
    .insert(user, "id")
    .then(([id]) => {
      return findById(id);
    });
}

function remove(id) {
  return db("ff7").where('id', id).del();
}

function findById(id) {
  return db("ff7").where({ id }).first();
}

function find(){
  return db('ff7').select('*')
}