import React from 'react'
import {FiSearch} from 'react-icons/fi'
import Modal from './Modal'
import AddSubject from './AddSubject'



const SubjectTable = () => {

  return(
    <div className='sbj-table'>
        <div className="dataSpace">
            <div className='school'>
            <select name="schools" id="schools" className='schools'>
              <option value="University of Lagos" >University of Lagos</option>
              <option value="University Of Ibadan">University Of Ibadan</option>
              <option value="O.A.U">O.A.U</option>
           
            </select>
             
            </div>
            <div className="search">
              <FiSearch/>
            <input type="search" placeholder='Search for Subject...'  />
            </div>
            <AddSubject />
        </div>
        <table>
          <tr className='table-head'>
            <th>Name</th>
            <th>Questions</th>
            <th>participants</th>
            <th>Pass</th>
            <th>Failed</th>
            
          </tr>
          <tr className='table-data'>
            <td>Mathematics</td>
            <td>123</td>
            <td>100</td>
            <td>26%</td>
            <td>74%</td>
            <Modal />
          </tr>
          <tr className='table-data'>
            <td>Chemistry</td>
            <td>0</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <Modal />
          </tr>
          <tr className='table-data'>
            <td>English</td>
            <td>232</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <Modal />
          </tr>
          <tr className='table-data'>
            <td>Physics</td>
            <td>456</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
              <Modal />
           </tr>
        </table>
       


    </div>
  )
}

export default SubjectTable