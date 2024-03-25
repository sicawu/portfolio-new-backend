const router = require("express").Router()
const mongoose = require("mongoose")
const Work = require("../models/Work.model.js")

// CREATE a new work experience
router.post("/work", (req, res, next) => {
    const { name, description, date, location, company, tags } = req.body

    Work.create({ name, description, date, location, company, tags })
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