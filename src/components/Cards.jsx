import React from 'react'

const price = {
  color: "#ff7474",
  fontSize: "16px",
  fontFamily: "Inter",
}


export const Cards = ({ img, title, pricing, description}) => {
  return (
    <div className='h-card'>
      <img src={img} alt='card-1' />
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingLeft: "14px", paddingRight: "14px" }} >
        <p className='title' style={{ fontSize: "22.86px" }} >{title}</p>
        <p style={price} >{pricing}</p>
      </div>

      <div>
        <p className='description' style={{
          fontSize: "13px",
          fontFamily: "Karla",
          fontOpticalSizing: "auto",
          fontWeight: "300",
          fontStyle: "normal",
          paddingLeft: "14px",
          paddingRight: "14px",
          height:"60px"
        }} >{description}</p>
        <div style={{display:"flex", alignItems:"center", paddingLeft:"10px"}}>
        <p style={{
          fontSize: "20px",
          fontFamily: "Inter",
          paddingLeft:"20px"
        }} >Home Delivery </p> 
        <img src='.\images\DeliveryIcon.svg' alt='logo'/>
        </div> 
      </div>

    </div>
  )
}
