const db = require('../config/connection');
const { User, Party } = require('../models');
const cleanDB = require('./cleanDB');
const bcrypt = require('bcrypt');

// Once method will wait for the connection to be established before executing the callback function
db.once('open', async () => {
    try {
        console.log('server/utils/seed.js: db.once()');
        console.log('seed: Running cleanDB...');
        await cleanDB('User', 'users');
        await cleanDB('Party', 'parties');

        const hashedPassword = await bcrypt.hash("password", 10);

        console.log('seed: Creating users...');
        const users = await User.insertMany([
            {
                username: "Timtom",
                email: "timtom@tim.tom",
                password: hashedPassword
            },
            {
                username: "Lernantino",
                email: "lernantino@aol.com",
                password: hashedPassword  
            },
            {
                username: "Amiko",
                email: "amiko@gmail.com",
                password: hashedPassword
            }
        ]);
        console.log('seed: Users created...');

        console.log('seed: Creating parties...');
        const parties = await Party.insertMany([
            {
                name: "Tim's Party",
                description: "A party for Tim",
                location: "Tim's House",
                host: users[0]._id,
                guests: [users[1]._id, users[2]._id]
            },
            {
                name: "Lernantino's Party",
                description: "A party for Lernantino",
                location: "Lernantino's House",
                host: users[1]._id,
                guests: [users[0]._id, users[2]._id]
            }
        ]);
        console.log('seed: Parties created...');

        users.map(async (user) => {
            console.log("userid",user._id)
            await User.findOneAndUpdate(
                { 
                    _id: user._id
                },
                { 
                    $push: { 
                        parties: parties.filter((party) => 
                            party.host.includes(user._id)
                        ),
                    }, 
                },
            );
        });


        console.log('seed: Done!');
        process.exit(0);
    } catch (err) { 
        throw err; 
    }
});