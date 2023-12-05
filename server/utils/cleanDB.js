const models = require('../models');
const db = require('../config/connection');

module.exports = async (modelName, collectionName) => {
    try {
        // modelExists will create an array of collections that match the name passed in
        let modelExists = await models[modelName].db.db.listCollections({ name: collectionName }).toArray();
        
        if (modelExists.length) {
            await db.dropCollection(collectionName);
        }
    } catch (err) {
        throw err;
    }
}