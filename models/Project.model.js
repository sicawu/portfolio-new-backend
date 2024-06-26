const { Schema, model } = require("mongoose")

const projectSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        language: {
            type: [String],
            required: true
        },
        gitUrl: String,
        deployedUrl: String
    }
)

const Project = model("Project", projectSchema);

module.exports = Project