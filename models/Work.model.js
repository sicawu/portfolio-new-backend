const { Schema, model } = require("mongoose")

const workSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true
        },
        date: String,
        location: {
            type: String,
            required: true
        },
        company: String,
        tags: [String],
        order: {
            type: Number,
            required: true
        }
    }
)

const Work = model("Work", workSchema);

module.exports = Work