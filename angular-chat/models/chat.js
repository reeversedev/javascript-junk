let mongoose = require('mongoose');

let ChatSchema = new mongoose.Schema({
    message: String,
    updated_at: {
        type: String,
        default: Date.now
    }
});

module.exports = mongoose.model('Chat', ChatSchema);