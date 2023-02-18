const {MongoClient} = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const dbName = 'prioritize';

async function connect() {
    await client.connect();
    console.log('successful connection');

    const db = client.db(dbName);

    // users
/*
    await db
        .collection('user')
        .insertOne({ username: 'sloniu', password: '123' });

    const res = await db
        .collection('user')
        .find({})
        .toArray();*/

   /* const collection = db.collection('user');
    await collection.deleteOne({username: 'sloniu'});*/
}

connect()
    .catch(err => console.log(`Ups.. ${err}`))
    .finally(() => client.close());