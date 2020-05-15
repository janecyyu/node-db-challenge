const express = require("express");
const project = require("./projectModel");
const router = express.Router();

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
router.get("/:id/", (req, res) => {});

module.exports = router;
