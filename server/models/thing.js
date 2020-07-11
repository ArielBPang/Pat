const mongoose = require('mongoose');

const ThingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Thing must have a title. "],
        minlength: [3, "Must be at least 3 characters"]
    },
    description: {
        type: String
    },
    image: {
        type: String
    }
}, { timestamps: true })


mongoose.model("Thing", ThingSchema);