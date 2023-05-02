import React from 'react'
import {HiOutlineAcademicCap} from 'react-icons/hi'
import AddSubject from './AddSubject'

const EmptyDashboard = () => {
  return (
    <div className="empty-content">
          <HiOutlineAcademicCap className='cap' />
          <div className="content-text">Your subject question bank is empty.</div>
          <AddSubject />
    </div>
  )
}

export default EmptyDashboard


