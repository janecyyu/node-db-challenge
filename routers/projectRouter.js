const express = require("express");
const api = require("./projectModel");
const router = express.Router();

// retrieving a list of projects
router.get("/projects", (req, res) => {
  api
    .getProjects()
    .then((project) => {
      res.json(project);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get projects" });
    });
});

// retrieving a list of resources
router.get("/resources", (req, res) => {
  api
    .getResources()
    .then((resources) => {
      res.json(resources);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get projects" });
    });
});

// adding projects
router.post("/projects", (req, res) => {
  api
    .addProject(req.body)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create new project" });
    });
});

// adding resources
router.post("/resources", (req, res) => {
  api
    .addResource(req.body)
    .then((resources) => {
      res.status(201).json(resources);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create new resource" });
    });
});

// retrieving a list of tasks.
// include the project name and project description.
router.get('/tasks',(req,res)=>{
    api
    .getTasks()
    .then((tasks) => {
      res.json(tasks);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get projects" });
    });
})

// adding tasks
router.post("/tasks", (req, res) => {
    api
      .addTask(req.body)
      .then((task) => {
        res.status(201).json(task);
      })
      .catch((err) => {
        res.status(500).json({ message: "Failed to create new task" });
      });
  });

module.exports = router;
