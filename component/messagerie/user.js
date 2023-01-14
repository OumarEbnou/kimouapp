import React from 'react'

function UserM({name,time,img}) {
  return (
    <li className="clearfix">
        <img src={img} alt="avatar"/>
        <div className="about">
            <div className="name">{name}</div>
            <div className="status"> <i className="fa fa-circle offline"></i> {time} </div>
        </div>
    </li>
  )
}

export default UserM