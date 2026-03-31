import React from 'react'
import './CategoryViewer.css'
import { NavLink } from 'react-router'

function CategoryViewer({title, subTitle, image}) {
    // console.log(title)
  return (
    <div style={{
        backgroundImage: `url('${image}')`
    }} className="category-container">
        <div className="title">
            {title}
        </div>
        <div className="sub-title">
            {subTitle}
        </div>
        <NavLink to='' className="cover-container">
            Shop now
        </NavLink>
    </div>
  )
}

export default CategoryViewer