import { Link } from 'react-router-dom'
import React from 'react'


export const Hero = () => {


  return (
    <>
      <div style={{ backgroundColor: "#495E57", height: "488px", display:"flex", justifyContent:"center"}} >
        <div style={{width:"718px",paddingTop:"10px"}} >
          <p className='title' style={{ color: "#F4CE14" }} >Little Lemon</p>
          <p className='title' style={{ fontWeight: "300", fontSize: "44px", color: "white" }} >Chicago</p>
          <p className='description' style={{width:"453px", color:"white", marginBottom:"4rem"}} >Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment The restaurant features a locally-sourced menu with daily specials</p>
          <Link to='/reservation' ><button className='btn-1'>Reserve a table</button></Link>
        </div>
             
        <div style={{paddingTop:"170px"}} >
           <img src='./images/Hero-img.svg'alt='Hero banner' />
        </div>
      </div>

      <div style={{ backgroundColor: "transparent", height: "142px" }}>

      </div>
    </>
  )
}
