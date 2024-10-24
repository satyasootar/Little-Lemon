import React from 'react'

export const TestimonialCard = ({ image, user, profesion, feedback}) => {
  return (
    <div className='t-card'  style={{textAlign:"center"}} >
        <img src={image}alt='user' />

        <p className='title' style={{fontSize:"25px", fontWeight:"600"}}>{user}</p>

        <p className='description' style={{color:"#525252",fontSize:"16px", fontWeight:"500", margin:"5px"}} >{profesion}</p>

        <img src='./images/quote-icon.png' alt='icon' />

        <p className='description' style={{color:"#525252",fontSize:"16px", fontWeight:"500", textAlign:"center",  margin:"0px"}}  >
        {feedback}
        </p>
        </div>
  )
}
