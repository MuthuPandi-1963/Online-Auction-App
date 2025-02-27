import React from 'react'
import Bid from '../../images/bid.png'
const Logo = ({imgStyle,nameStyle}) => {
  return (
    
    <div className="flex gap-x-3 items-center my-4">
        <button className='bg-green-900 p-2 rounded-full'><img src={Bid} alt="bid" className={`${imgStyle ?imgStyle: 'h-12'} `} /></button>
        
        <p className={`${nameStyle ? nameStyle : "text-4xl font-semibold"} font-mono tracking-tighter `}>BID-Deal</p>
    </div>
  )
}

export default Logo;