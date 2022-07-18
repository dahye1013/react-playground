import { MongoClient } from 'mongodb';
//req - contain data about the incoming request (headers or req body)
//res - for sending back a response

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    // never run in client side - secure space

    const client = await MongoClient.connect(process.env.NEXT_PUBLIC_MONGO_DB_URL);

    const db = client.db();
    const meetupsCollection = db.collection('meetups');

    const result = await meetupsCollection.insertOne(data);

    client.close();

    res.status(201).json({ message: 'Meetup inserted!' });
  }
}

export default handler;
