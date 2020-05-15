exports.seed = function (knex, Promise) {
  return knex("tasks").insert([
    { description: "write down your name", completed: true },
    { description: "write down the date", completed: true },
    { description: "print it out", completed: false },
    { description: "pin the papers", completed: false },
  ]);
};
