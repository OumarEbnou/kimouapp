import { useState } from "react";
import decrytfile from "../../helper/algo/decryptfile";

/**
 * # MY ACCOUNT GOOGLE PLAY:
 * @see {@link https://play.google.com/store/apps/developer?id=dzino Google Play}
 */

export default function DecPrivatePage({algo,showFile}) {
  const [img, setImg] = useState(null);

  const uploadTo1Client = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      const fileName = i.name;

      let fileExtension = (fileName.substr(fileName.lastIndexOf('.'))).substr(1);

      showFile(i,fileExtension,fileName)
      setImg(i);
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
  const decrypter = async (event) => {
    event.preventDefault()
    const ii=await img.arrayBuffer()

    let fileExtension=exten(img)
    console.log(fileExtension[0]);
    var arrayBuffer = new Uint8Array(ii);

    var txt =decrytfile(arrayBuffer,algo)

    const data=new Uint8Array(txt)

    var blob = new Blob([data], {type: fileExtension[0]});
    showFile(blob,fileExtension[1],img.name)
    setImg(blob);

  };
  return (
    <div>
      <div>
          <div className="row">
            <input type="file" name="file-7" onChange={uploadTo1Client} id="file-7" hidden className="inputfile inputfile-5"   />
			<label for="file-7"><figure><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"/></svg></figure> <span></span></label>

          </div>
          <div className="row">
            <button className="btn btn-primary" type="submit" onClick={decrypter}> Decrypter</button>

          </div>



      </div>
    </div>
  );
}
