exports.seed = function (knex, Promise) {
  return knex("projects").insert([
    { name: "summer vacation ideas", completed: true, tasks: 3 },
    { name: "winter trips ideas", completed: true, tasks: 1 },
    { name: "why we sleep?", completed: false, tasks: 2 },
    { name: "dog food recommendation", completed: false, tasks: 4 },
  ]);
};
