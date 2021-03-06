const mongoose = require('mongoose')

const adoptionSchema = new mongoose.Schema({
    animalId: {
        type: String,
        required: true,
    },
    requesterId: {
        type: String,
        required: true,
    },
    allowerId: {
        type: String
    },
    status: {
        type: Number,
        enum: [0, 1, 2], // 0 -> Pending, 1 -> Approved, 2 -> Rejected
        default: 0
    },
    userMessage: {
        type: String,
        trim: true,
        default: ""
    },
    allowerMessage: {
        type: String,
        trim: true,
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('adoptions', adoptionSchema)