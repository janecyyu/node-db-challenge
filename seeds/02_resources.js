exports.seed = function (knex, Promise) {
  return knex("resources").insert([
    { name: "microphone" },
    { name: "ipad" },
    { name: "tablet" },
    { name: "pen" },
    { name: "whiteboard" },
  ]);
};
