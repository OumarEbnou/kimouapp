import { useState } from "react";
import crytfile from "../../helper/algo/crytfile";
import decrytfile from "../../helper/algo/decryptfile";

/**
 * # MY ACCOUNT GOOGLE PLAY:
 * @see {@link https://play.google.com/store/apps/developer?id=dzino Google Play}
 */

export default function PrivatePage({algo,showFile,file}) {
  const [image, setImage] = useState(null);

  var enc1 = new TextEncoder();
  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      const fileName = i.name;

      let fileExtension = (fileName.substr(fileName.lastIndexOf('.'))).substr(1);

      showFile(i,fileExtension,fileName)
      setImage(i);

    }
  };
  function exten(file){
    const fileName = file.name;

    let fileExtension = (fileName.substr(fileName.lastIndexOf('.'))).substr(1);
    let fileType

    switch (fileExtension) {
      case 'png':
        fileType = 'image/png';
        break;
      case 'gif':
        fileType = 'image/gif';
        break;
      case 'jfif':
        fileType = 'image/jpeg';
        break;
      case 'jpg':
      case 'jpeg':
        fileType = 'image/jpeg';
        break;
      case 'svg':
        fileType = 'image/svg+xml';
        break;
      case 'bmp':
        fileType = 'image/bmp';
        break;
      case 'ico':
        fileType = 'image/vnd.microsoft.icon';
        break;
      case 'webp':
        fileType = 'image/webp';
        break;
      case 'txt':
        fileType = 'text/plain';
        break;
      case 'html':
        fileType = 'text/html';
        break;
      case 'css':
        fileType = 'text/css';
        break;
      case 'js':
        fileType = 'application/javascript';
        break;
      case 'json':
        fileType = 'application/json';
        break;
      case 'pdf':
        fileType = 'application/pdf';
        break;
      case 'doc':
      case 'docx':
        fileType = 'application/msword';
        break;
      case 'xls':
      case 'xlsx':
        fileType = 'application/vnd.ms-excel';
        break;
      case 'ppt':
      case 'pptx':
        fileType = 'application/vnd.ms-powerpoint';
        break;
      case 'mp3':
        fileType = 'audio/mpeg';
        break;
      case 'wav':
        fileType = 'audio/wav';
        break;
      case 'aac':
        fileType = 'audio/aac';
        break;
      case 'ogg':
        fileType = 'audio/ogg';
        break;
      case 'flac':
        fileType = 'audio/flac';
        break;
      case 'm4a':
        fileType = 'audio/mp4';
        break;
      case 'm4b':
        fileType = 'audio/mp4';
        break;
      default:
        // Set the file type to 'application/octet-stream' for unknown file types
        fileType = 'application/octet-stream';
        break;
    }

    return [fileType,fileExtension]
  }
  const crypter = async (event) => {
    event.preventDefault()
    const ii=await image.arrayBuffer()
    let fileExtension=exten(image)
    var arrayBuffer = new Uint8Array(ii);
    const msg =crytfile(arrayBuffer,algo)

    const data=enc1.encode(msg)
    var blob = new Blob([data], {type: fileExtension[0]});
    showFile( blob,fileExtension[1], image.name)
    setImage(blob);
  };
  const decrypter = async (event) => {
    event.preventDefault()
    const ii=await image.arrayBuffer()

    let fileExtension=exten(image)
    console.log(fileExtension[0]);
    var arrayBuffer = new Uint8Array(ii);

    var txt =decrytfile(arrayBuffer,algo)

    const data=new Uint8Array(txt)

    var blob = new Blob([data], {type: fileExtension[0]});
    showFile(blob,fileExtension[1],image.name)
    setImage(blob);

  };

  return (
    <div>
      <div class="row">

        <div class="frame">
          <div class="center">
            <div class="title">
              <h1>Drop file to upload</h1>
            </div>

            <div class="dropzone">
              <img src="http://100dayscss.com/codepen/upload.svg" class="upload-icon" />
              <input type="file" onChange={uploadToClient} class="upload-input" />
            </div>
        </div>

      </div>
          <div className="row">

              <button className="btn btn-danger" type="submit" onClick={crypter}>Crypter</button>
              <button className="btn btn-warning" type="submit" onClick={decrypter}>Decrypter</button>

          </div>



      </div>
    </div>
  );
}
