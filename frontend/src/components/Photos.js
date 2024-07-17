import React from 'react'
import './componentsCss/cards.css'
function Photos ({items}){
   
  return (

    <div className="services-contents">
    <div className="service-box">
    <div className="service-img">
                <img src={items?.src} alt="" />
            </div>
    </div>
</div>

  )
}

export default Photos
