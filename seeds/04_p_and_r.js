exports.seed = function (knex, Promise) {
    return knex("projects_and_resources").insert([
        {projectID:1, resourceID:1},
        {projectID:1, resourceID:2},
        {projectID:1, resourceID:3},
        {projectID:2, resourceID:3},
        {projectID:3, resourceID:1},
        {projectID:3, resourceID:2},
        {projectID:4, resourceID:2},
    ]);
  };
  