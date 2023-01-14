import React, { useState } from 'react'
import Cryptage from './textcrypt'
import DecPrivatePage from './filedecrypt'
import Decryptage from './textdecrypt'
import PrivatePage from './filecrypt'


const imageformat=['png','gif','jpg','jpeg','svg','bmp','ico','webp','jfif']
const txtformat=['txt','html','css','js']
const applicationformat=['json','pdf','doc','docx','xls','xlsx','ppt','pptx']
const audioformat=['mp3','wav','aac','ogg' ,'flac','m4a','m4b']


function Cryptographie({algo}) {
    const [filee,setFileUrl]=useState([])
    const [type,setType]=useState(null)
    const [text, setText] = useState('');
    function showFile(file,type,fileName){
      var filUrl = URL.createObjectURL(file);
      console.log(filUrl);
      fileName=fileName.substr(0,fileName.lastIndexOf('.'))
      console.log(fileName);
      if (txtformat.includes(type)) {
        const fileReader = new FileReader();
        fileReader.onload = (event) => {
          setText(event.target.result);
        };
        fileReader.readAsText(file);
      }
        setFileUrl([file,filUrl,fileName])
        setType(type)
    }
  return (

      <div className='container'>
        <div className="row">
          <div className="col-9">
              <div className="row">
              <div className="col-8">
                {type && <a href={filee[1]} download={filee[2]+"result"} > {filee[2]+"result"}<br/></a> }
                    {imageformat.includes(type) &&  <img src={filee[1]} style={{width: '400px'}} alt="" />}
                    {txtformat.includes(type) && <pre>{text}</pre>}
                    {audioformat.includes(type) && (
                      <audio controls src={filee[1]}>
                      Your browser does not support the audio element.
                    </audio>
                  )}
              </div>
              <div className="col-4">
                <div className="row">
                 <PrivatePage algo={algo} showFile={showFile} />
                 </div>

              </div>
              </div>


        </div>

        <div className="col-3" style={{borderLeft: 'solid 6px black'}}>
        <span className="d-block p-2 bg-warning text-black">Cryptage</span>

           <Cryptage algo={algo} />
           <span className="d-block p-2 bg-warning text-black">Decryptage</span>

            <Decryptage algo={algo} />
        </div>

        </div>
      </div>
  )
}

export default Cryptographie