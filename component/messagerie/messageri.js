import React, { useEffect, useRef, useState } from 'react';
import Chat from './chat';

//import classes from './messageri.css'
import Msg from './msg';
import Msgme from './msgme';
import Speaker from './speaker';
import UserM from './user';

function Messageri({user}) {
    const [ms,setMs]= useState([])
    const msg= useRef()

    var messageHandler =function (event) {
        event.preventDefault();
        const message = {message: msg.current.value,user: user,date: Date.now()}

        fetch('/api/msg', {
            method: 'POST',
            body: JSON.stringify(message),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response)=> response.json())
            .then((data)=> {setMs(data.messages)})

        msg.current.value=''
  }

  useEffect(()=>{
    fetch('/api/msg/')
        .then((response)=> response.json())
        .then((data)=> {setMs(data.messages)})
  },[ms])
//  setInterval(function () {
//    fetch('/api/msg/')
//          .then((response)=> response.json())
//          .then((data)=> {setMs(data.messages)}
//    )}, 5000);
  return (
        <div className="container" >
            <div className="clearfix">
                <div className="col-lg-12">
                    <div className="card ">

                        <div className="chat">
                            <Speaker  user={user} />
                            {ms[0] ? <Chat messages={ms} user={user} />:''}

                            <div className="chat-message clearfix">

                                    <form className="d-flex">
                                        <div className="input-group-prepend">
                                            <button onClick={messageHandler} type="submit">
                                                <span className="input-group-text">
                                                    <i className="fa fa-send-o" style={{fontSize: 25 }} />
                                                </span>
                                            </button>
                                        </div>
                                        <input ref={msg} type="text" className="form-control" placeholder="Enter text here..."/>
                                    </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

  )
}

export default Messageri