const mongoose = require('mongoose');

// Connect to the production database, or localhost if not available
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/party-planner');

module.exports = mongoose.connection;