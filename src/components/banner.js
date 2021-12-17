import React from 'react'
import banner from "../assets/banner.jpg" 

function Banner() {
    return (
        <div>
          <img className="object-contain w-screen mb-10" src={banner} alt="banner" />
        </div>
    )
}

export default Banner
