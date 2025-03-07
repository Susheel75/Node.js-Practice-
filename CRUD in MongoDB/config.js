const {MongoClient} = require('mongodb');
const path = 'mongodb://localhost:27017/';
const database = 'ecomm';

const client = new MongoClient(path);

async function dbConnect(){
    let connection = await client.connect();
    let db = connection.db(database);
    let collection = db.collection('user');
    return collection;
}

module.exports = dbConnect
