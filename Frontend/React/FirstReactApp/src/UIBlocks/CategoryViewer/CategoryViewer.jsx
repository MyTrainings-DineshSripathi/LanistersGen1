import React from 'react'
import './CategoryViewer.css'

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
        <a href='' className="cover-container">
            Shop now
        </a>
    </div>
  )
}

export default CategoryViewer