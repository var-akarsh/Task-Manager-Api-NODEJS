const mongoose = require('mongoose')
const validator = require('validator')

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true,
        unique: false
    },
    completed: {
        type: Boolean,
        default: false,
        trim: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
}, {
    timestamps: true
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task