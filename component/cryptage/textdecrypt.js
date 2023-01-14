import React, { useRef, useState } from 'react'

function Decryptage({algo}) {
    const [msg,setMsg]=useState()
    const txt=useRef()
    function decrypter(event) {
        event.preventDefault()

        const msg=txt.current.value
        setMsg(algo.decrypt(msg))
    }
  return (
    <div className="container " >

        <div className="row">

                <form className="d-flex">
                     <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Illustration</label>
                        <textarea ref={txt} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        <button onClick={decrypter} className="btn btn-outline-success" type="submit">Decrypter</button>
                     </div>
                </form>

        </div>
        <div className="row">
            <div className="col-12">
                <span className="badge bg-secondary">Message crypté: </span><br/>
                {msg? msg:''}
            </div>
        </div>
    </div>
  )
}

export default Decryptage