var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var QuerySchema = new Schema({
    title: { type: String, required: true, default: "" },
    description: { type: String, required: true, default: "" },
    userName: { type: String, required: true, default: "" },
    userMobile: { type: Number, required: true },
    userEmail: { type: String, required: true, default: "" },
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() },
    ticketStatus: { type: String, default: 'Open' },
});

var Query = module.exports = mongoose.model('Query', QuerySchema);