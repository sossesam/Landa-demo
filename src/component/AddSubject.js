import React,{useState} from 'react'

const AddSubject = () => {
  const [modal, setModal] = useState(false);

    const toggleModal = ()=>{
        setModal(!modal)
    }
  return (
    <>
    <div className="addsubject" > 
    <div className="content-button" onClick={toggleModal}>Add Subject</div>
            {modal && (<div className="subject-form">
            <div className="fulloverlay" onClick={toggleModal}></div>
              <form action="" className='the-form'>
                <div className="formTitle">Create Subject</div>
                <div className='formdiv'>
                <label htmlFor="Institution">Institution</label>
                <div className='modal-school'>
                <select name="schools" id="schools" className='modal-schools'>
              <option value="University of Lagos" >University of Lagos</option>
              <option value="University Of Ibadan">University Of Ibadan</option>
              <option value="O.A.U">O.A.U</option>
            </select>
                </div>
                </div>
                <div className='formdiv'>
                <label htmlFor="Subject">Subject</label>
               
                    <input type="text" name="subject" id="" placeholder='Mathematics'/>
           
               </div>
               <div className='formdiv'>
                <label htmlFor="Subject">Lecturer</label>
                <div >
                    <input type="text" name="subject" id="" placeholder='Enter Name'/>
                </div>
                <div className='add-area'>
                    + Add Subject
                </div>

               <div>
               <div className="content-button">
                    SAVE
                </div>
               </div>
               </div>
                

              </form>
            </div>)}
            
    </div>
     
    </>
  )
}

export default AddSubject