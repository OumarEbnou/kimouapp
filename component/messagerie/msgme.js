import React from 'react'

function Msgme({msg,time,img}) {
  var date =new Date(time)
  const d=date.getDate()
  const m=date.getMonth()
  const y=date.getFullYear()
  const h=date.getHours()
  const mu=date.getMinutes()
  const s=date.getSeconds()

  return (

    <li className="clearfix ">
        <div className="message-data text-end">
            <span className="message-data-time">{d}-{m}-{y} {h}:{mu}:{s}</span>
            <img src={img} alt="avatar"/>
        </div>
        <div className="message other-message float-right"> {msg} </div>
    </li>

  )
}

export default Msgme