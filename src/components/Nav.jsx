import { Link } from 'react-router-dom'
import React from 'react'
export const Nav = () => {
  return (
    <div>
        <nav style={{display:"flex", alignItems:"Center", justifyContent: "center", paddingTop:"10px", fontSize:"33px",   fontFamily: "Markazi Text", fontOpticalSizing: "auto", fontWeight: 400, fontStyle: "normal"}} >
            <div className='logo' >
                <img src=".\images\Logo.png" alt='Logo' style={{height:"79px"}}/>
            </div>
            <div className='links' >
                <ul style={{display:"flex", gap:"32px", listStyle:"none"}} >
                    <li><Link to='/' className='link' >Home</Link></li>
                    <li>About</li>
                    <li>Menu</li>
                    <li><Link to='/reservation' className='link' >Reservation</Link></li>
                    <li>Order Online</li>
                    <li>Log In</li>
                </ul>
            </div>
        </nav>
    </div>
  )
}
