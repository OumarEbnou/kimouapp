import {MongoClient,ServerApiVersion} from 'mongodb'

async function handeler(req,res) {
    const url = "mongodb+srv://crypto:3rYjNi4UTir398JO@cluster0.hrdk8gg.mongodb.net/crypto?retryWrites=true&w=majority";
    const client = await MongoClient.connect(url);
    const db= client.db()
   if (req.method ==='POST') {
            const message = req.body.message;
            const user = req.body.user;
            const date = req.body.date;
            const msg ={
                message: message,
                user: user,
                date: date
            }
            await db.collection('messages').insertOne(msg)
            const ms =  await db.collection('messages').find().sort({_id:1}).toArray()
            res.status(201).json({msg:'success',messages: ms})
        }

    if (req.method === 'GET') {
        const messages =  await db.collection('messages').find().sort({_id:1}).toArray()
        res.status(201).json({msg:'success',messages: messages})
    }

    client.close();
}
export default handeler