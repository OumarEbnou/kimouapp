import path from 'path';
import fs from 'fs';
export function getDataFile(){
    return path.join(process.cwd(),'data','comments.json');
}
export function extractFile(filePath){
    const fileData=fs.readFileSync(filePath);
    const data=JSON.parse(fileData);
    return data;
}
function handler(req,res) {

    if (req.method === 'POST') {
        const email = req.body.email;
        const name = req.body.name;
        const eventId = req.body.event;
        const comment = req.body.comment;
        const feedbackreq ={
            id: new Date().toISOString(),
            email: email,
            name: name,
            event: eventId,
            comment: comment
        }

        const filePath=getDataFile();
        const data=extractFile(filePath);

        data.push(feedbackreq);
        fs.writeFileSync(filePath,JSON.stringify(data))

        res.status(201).json({msg:'success'})
    }else{
        const filePath=getDataFile();
        const data=extractFile(filePath);
         res.status(201).json({msg: 'work',data:data})
    }


}
export default handler