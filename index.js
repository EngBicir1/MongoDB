const { MongoClient } = require('mongodb');
const uri = "mongodb://127.0.0.1:27017";

const client = new MongoClient(uri);

async function connectDB() {
    try {
        await client.connect();
        console.log("Database is connected");
    } catch (err) {
        console.error("Database connection error:", err);
    }
}

connectDB();
