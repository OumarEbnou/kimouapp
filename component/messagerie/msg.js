import React from 'react'

function Msg({msg,time}) {
  var date =new Date(time)
  const d=date.getDate()
  const m=date.getMonth()
  const y=date.getFullYear()
  const h=date.getHours()
  const mu=date.getMinutes()
  const s=date.getSeconds()
  return (
    <li className="clearfix">
      <div className="message-data">
          <span className="message-data-time">{d}-{m}-{y} {h}:{mu}:{s}</span>
      </div>
      <div className="message my-message">{msg}</div>
    </li>
  )
}

export default Msg