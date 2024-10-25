import { Link } from 'react-router-dom';
import React, { useState } from 'react';

export const Nav = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State to manage drawer visibility

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const navStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between", // Change to space-between for responsiveness
    padding: "10px 80px",
    fontSize: "33px",
    fontFamily: "Markazi Text",
    fontWeight: 400,
    fontStyle: "normal",
    position: "relative",
  };

  const linkStyles = {
    position: "relative",
    textDecoration: "none",
    color: "#000",
    padding: "5px 0",
  };

  const hoverEffectStyles = {
    content: '""',
    display: "block",
    width: "0",
    height: "2px",
    background: "green",
    transition: "width 0.3s ease",
    position: "absolute",
    left: 0,
    bottom: "-5px",
  };

  const handleMouseEnter = (e) => {
    const span = e.currentTarget.querySelector('span');
    if (span) {
      span.style.width = "100%"; // Expand underline on hover
    }
  };

  const handleMouseLeave = (e) => {
    const span = e.currentTarget.querySelector('span');
    if (span) {
      span.style.width = "0"; // Collapse underline when not hovering
    }
  };

  return (
    <div>
      <nav style={navStyles}>
        <div className='logo'>
          <img src="./images/Logo.png" alt='Logo' style={{ height: "79px" }} />
        </div>
        <div className='links'>
          <ul style={{ display: "flex", gap: "32px", listStyle: "none" }}>
            <li>
              <Link
                to='/'
                className='link'
                style={linkStyles}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Home
                <span style={{ ...hoverEffectStyles }}></span>
              </Link>
            </li>
            <li>
              <Link
                to='/about'
                className='link'
                style={linkStyles}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                About
                <span style={{ ...hoverEffectStyles }}></span>
              </Link>
            </li>
            <li>
            <Link
                to='/menu'
                className='link'
                style={linkStyles}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Menu
                <span style={{ ...hoverEffectStyles }}></span>
              </Link></li>
            <li>
              <Link
                to='/reservation'
                className='link'
                style={linkStyles}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Reservation
                <span style={{ ...hoverEffectStyles }}></span>
              </Link>
            </li>
            <li style={{}}>Order Online</li>
            <li style={{ }}>Log In</li>
          </ul>
        </div>
        <button onClick={toggleDrawer} style={{ display: "none" }}>☰</button>
      </nav>

      
      {isDrawerOpen && (
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100vh",
          width: "250px",
          background: "#fff",
          boxShadow: "2px 0 5px rgba(0, 0, 0, 0.5)",
          padding: "20px",
          zIndex: 1000,
        }}>
          <button onClick={toggleDrawer} style={{ marginBottom: "20px" }}>Close</button>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <Link to='/' className='link' style={linkStyles}>Home</Link>
            </li>
            <li>
              <Link to='/about' className='link' style={linkStyles}>About</Link>
            </li>
            <li>
            <Link to='/menu' className='link' style={linkStyles}>Menu</Link>
            </li>
            <li>
              <Link to='/reservation' className='link' style={linkStyles}>Reservation</Link>
            </li>
            <li style={{ color: "#b6b6b6" }}>Order Online</li>
            <li style={{ color: "#b6b6b6" }}>Log In</li>
          </ul>
        </div>
      )}
    </div>
  );
};
