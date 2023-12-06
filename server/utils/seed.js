const db = require('../config/connection');
const { User } = require('../models');
const cleanDB = require('./cleanDB');
const userSeeds = require('./userSeeds.json');

// Once method will wait for the connection to be established before executing the callback function
db.once('open', async () => {
    try {
        console.log('server/utils/seed.js: db.once()');
        console.log('seed: Running cleanDB...');
        await cleanDB('User', 'users');
        console.log('seed: Creating users...');
        await User.create(userSeeds);

        console.log('seed: Done!');
        process.exit(0);
    } catch (err) { 
        throw err; 
    }
});