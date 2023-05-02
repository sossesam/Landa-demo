import React, { useState } from 'react'
import {BiDotsVerticalRounded} from "react-icons/bi"

const Modal = () => {
    const [modal, setModal] = useState(false);

    const toggleModal = ()=>{
        setModal(!modal)
    }
  return (
    <>
    <div className="dot" > 
            <BiDotsVerticalRounded onClick={toggleModal}/>
            
            {modal && (<div className="modal-content">
            <div className="overlay" onClick={toggleModal}></div>
               <div className="dotModal"> Question</div>
               <div className="dotModal">Add Question</div>
               <div className="dotModal">Delete</div>
            </div>)}
            
    </div>
     
    </>
  )
}

export default Modal