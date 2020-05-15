exports.seed = function (knex, Promise) {
  return knex("projects").insert([
    { name: "summer vacation ideas", completed: true },
    { name: "winter trips ideas", completed: true },
    { name: "why we sleep?", completed: false },
    { name: "dog food recommendation", completed: false },
  ]);
};
