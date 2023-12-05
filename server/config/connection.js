const mongoose = require('mongoose');

// Connect to the production database, or localhost if not available
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/apollo-server');

module.exports = mongoose.connection;