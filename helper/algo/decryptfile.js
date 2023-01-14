export  default function decrytfile(buffer,rsa){

    const enc=new TextDecoder("utf-8")
    var txt ,txt2
    const origin= enc.decode(buffer)
    txt=rsa.decrypt(origin)

    txt2=txt.split(',')
    return txt2
}