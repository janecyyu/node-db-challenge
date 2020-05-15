const db = require("../dbConfig");

module.exports = {
  getProjects,
  addProject,
  getResources,
  addResource,
};

function getProjects() {
  return db("projects");
}

function addProject(data) {
  return db("projects").insert(data, "id");
}
function getResources() {
  return db("resources");
}

function addResource(data) {
  return db("resources").insert(data, "id");
}
