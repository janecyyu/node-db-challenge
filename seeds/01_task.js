exports.seed = function (knex, Promise) {
  return knex("tasks").insert([
    { description: "write down your name", completed: true , projectID:1},
    { description: "write down your dog's name", completed: true , projectID:1},
    { description: "write down the date", completed: true,projectID:2 },
    { description: "print it out", completed: true,projectID:3 },
    { description: "color it", completed: false,projectID:3 },
    { description: "pin the papers", completed: false,projectID:4 },
  ]);
};
