const router = require("express").Router()
const mongoose = require("mongoose")
const Work = require("../models/Project.model.js")

// CREATE a new work experience
router.post("/work", (req, res, next) => {
    const { name, description, startDate, endDate, location, tags } = req.body

    Work.create({ name, description, startDate, endDate, location, tags })
        .then ((newWork) =>
        res.status(200).json(newWork))
        .catch((err) =>
            next(err))
})


// READ all work experiences
router.get("/work", (req, res, next) => {
    Work.find()
        .then((allWork) =>
            res.status(200).json(allWork))
        .catch((err) =>
            next(err))
})

module.exports = router