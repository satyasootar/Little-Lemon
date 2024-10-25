import React from 'react';

const listStyle = {
  listStyle: "none",
  paddingLeft: "0",
  fontSize: "18px"
};

export const Footer = () => {
  return (
    <footer style={{ fontFamily: "Markazi Text", fontOpticalSizing: "auto", fontWeight: 100, fontStyle: "normal", paddingTop: "50px", paddingBottom: "50px" }}>
      <section style={{ display: "flex", justifyContent: "center", gap: "50px" }}>
        <div>
          <img src="./images/Logo.png" alt="logo" style={{ height: "100px" }} />
        </div>

        <div>
          <h3>Navigation</h3>
          <ul style={listStyle}>
            <li>Homee</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservation</li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </div>

        <div>
          <h3>Contact</h3>
          <ul style={listStyle}>
            <li>123 Lemon St, Chicago, IL</li>
            <li>(555) 123-4567</li>
            <li>info@littlelemon.com</li>
          </ul>
        </div>

        {/* <div>
          <ul style={listStyle}>
            <li><FontAwesomeIcon icon={faInstagram} /></li>
            <li><FontAwesomeIcon icon={faFacebook} /></li>
            <li><FontAwesomeIcon icon={faTwitter} /></li>
          </ul>
        </div> */}
      </section>

      <p style={{display:"flex", justifyContent:"center"}} >All rights reserver © littleLemon</p>
    </footer>
  );
};
