
import { MongoClient } from 'mongodb';

async function handeler(req,res) {
    const event = req.query.eventId;
    const uri = "mongodb+srv://Oumar:QNVKvrVibr0T8BxH@cluster0.hrdk8gg.mongodb.net/test?retryWrites=true&w=majority";
    const client = await  MongoClient.connect(uri);
    const db=client.db();
   if (req.method ==='POST') {
            const email = req.body.email;
            const name = req.body.name;
            const comment = req.body.text;
            const commt ={
                email: email,
                name: name,
                event: event,
                comment: comment
            }

            await db.collection('comments').insertOne(commt)
            res.status(201).json({msg:'success'})
        }

    if (req.method === 'GET') {

        const document =  await db.collection('comments').find().sort({_id:-1}).toArray()
        const comments =document.filter(itm => itm.event === event)

         res.status(201).json({msg:'success',comments: comments})


    }

    client.close();
}
export default handeler