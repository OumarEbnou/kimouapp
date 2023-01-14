
 export default function  crytfile(buffer,rsa){
    const enc=new TextDecoder("utf-16")
    var txt=""
    var txt2
    const l =buffer.length
    for (let k = 0; k < l; k++) {

        if (k==l-1) {
            txt+=buffer[k]
        }else{
            txt+=buffer[k]+','
        }
    }

    txt2=rsa.encrypt(txt)
    return  txt2
}

