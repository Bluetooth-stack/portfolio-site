import React from 'react'
import './styl.css'

function Pagename({ pageName }) {
  return (
    <div>
        <h1 className="homeTag">{pageName}</h1>
    </div>
  )
}

export default Pagename