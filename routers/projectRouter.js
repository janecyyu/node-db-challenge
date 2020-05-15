const express = require("express");
const project = require("./projectModel");
const router = express.Router();

// retrieving a list of projects
router.get("/", (req, res) => {
  project
    .getProjects()
    .then((recipe) => {
      res.json(recipe);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get projects" });
    });
});

// adding projects
router.post("/", (req, res) => {
  project
    .addProject(req.body)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create new project" });
    });
});

module.exports = router;
