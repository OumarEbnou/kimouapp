import React from 'react'
import Msg from './msg'
import Msgme from './msgme'

function Chat({messages,user}) {

    var t =[],v,img
    if (user==1) {
        img='https://bootdey.com/img/Content/avatar/avatar8.png'
    }else{
        img='https://bootdey.com/img/Content/avatar/avatar1.png'
    }
    messages.map((itm)=>{
        if (itm.user==user) {
            t=[t,...[<Msg msg={itm.message}  time={itm.date}/>]]
        }
        else{
            v=[<Msgme msg={itm.message}  time={itm.date} img={img} />]
            t=[t,...v]
        }

    })


  return (
    <div className="chat-history custom-scrollbar" style={{display: 'flex',flexDirection: 'column-reverse',height: "200px", overflow:'auto'}}>
        <ul className="m-b-0">
            { t.map((itm)=>itm)}
        </ul>
    </div>
  )
}

export default Chat