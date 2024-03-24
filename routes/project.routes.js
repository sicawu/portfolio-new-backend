const router = require("express").Router()
const mongoose = require("mongoose")
const Project = require("../models/Project.model.js")

// CREATE a new project
router.post("/projects", (req, res, next) => {
    const { name, description, language } = req.body

    Work.create({ name, description, language })
        .then ((newProject) =>
        res.status(200).json(newProject))
        .catch((err) =>
            next(err))
})

// READ all projects
router.get("/projects", (req, res, next) => {
    Project.find()
    .then((allProjects) =>
    res.status(200).json(allProjects))
    .catch ((err) =>
    next(err))
})

module.exports = router