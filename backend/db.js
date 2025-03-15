const { MongoClient } = require('mongodb');

// MongoDB Atlas connection string
const uri = 'mongodb+srv://Johndoe:JD1234@cluster0.de9sc.mongodb.net/smart_sadak?retryWrites=true&w=majority&appName=Cluster0';

const client = new MongoClient(uri);

let db;

async function connectToDB() {
  try {
    await client.connect();
    db = client.db('smart_sadak');
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
  }
}

function getDB() {
  return db;
}

module.exports = { connectToDB, getDB };