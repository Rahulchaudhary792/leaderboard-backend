const mongoose = require('mongoose');
const History = mongoose.model('History', new mongoose.Schema({
	user: String,
	points: Number,
	date: { type: Date, default: Date.now }
}));
module.exports = History;