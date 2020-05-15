const db = require("../dbConfig");

module.exports = {
  getProjects,
  addProject,
  getResources,
  addResource,
  getTasks,
  addTask
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

function getTasks() {
  return db("tasks as t")
    .join("projects as p", "p.id", "=", "t.projectID")
    .select(
      "t.*",
      "p.name as project_name",
      "p.description as project_description"
    );
}

function addTask(data){
  return db("tasks").insert(data, "id");
}
