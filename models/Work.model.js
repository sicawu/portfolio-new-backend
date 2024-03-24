const { Schema, model } = require("mongoose")

const workSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
        description: {
            type: String,
            required: true
        },
        startDate: Date,
        endDate: Date,
        location: {
            type: String,
            required: true
        },
        tags: [String]
    }
)

const Work = model("Work", workSchema);

module.exports = Work