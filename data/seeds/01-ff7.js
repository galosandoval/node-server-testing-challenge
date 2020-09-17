exports.seed = function (knex) {
  const ff7Characters = [
    {
      name: "Cloud Strife",
    },
    {
      name: "Tifa",
    },
    {
      name: "Barret",
    },
  ];
  return knex("ff7")
    .insert(ff7Characters)
    .then(() => console.log("== Seed data for ff7 table added =="));
};
