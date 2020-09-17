
exports.up = function(knex) {
  return knex.schema.createTable('ff7', tbl => {
    tbl.increments()

    tbl.string('name', 100).notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('ff7')
};
