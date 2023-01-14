import React from 'react'

function Speaker({user}) {
    var name,img
    console.log(user);
    if (user==1) {
        name="Fatimetou",img="https://bootdey.com/img/Content/avatar/avatar8.png"
    }else{
        name="Oumar",img="https://bootdey.com/img/Content/avatar/avatar1.png"
    }
  return (
    <div className="chat-header clearfix">
        <div className="row">
            <div className="col-lg-6">
                <a href="javascript:void(0);" data-toggle="modal" data-target="#view_info">
                    <img src={img} alt="avatar"/>
                </a>
                <div className="chat-about">
                    <h6 className="m-b-0">{name}</h6>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Speaker