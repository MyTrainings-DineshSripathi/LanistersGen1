import React from 'react'
import './NotFoundPage.css'
import NotFoundImage from '../../assets/404-status-code.png'

function NotFoundPage() {
  return (
    <div className='notfound'>
        <img src={NotFoundImage} alt="" />
    </div>
  )
}

export default NotFoundPage