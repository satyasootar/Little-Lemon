import React from 'react';

// Styles for the footer and list
const listStyle = {
  listStyle: "none",
  paddingLeft: "0",
  fontSize: "18px"
};

const footerStyle = {
  fontFamily: "Markazi Text",
  fontOpticalSizing: "auto",
  fontWeight: 100,
  fontStyle: "normal",
  paddingTop: "50px",
  paddingBottom: "50px",
  backgroundColor: "#f8f8f8", // Add background color for better visibility
  textAlign: "center" // Center text for a uniform look
};

const sectionStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "50px",
  flexWrap: "wrap" // Allows items to wrap on smaller screens
};

const logoStyle = {
  height: "100px",
};

// Social Media Icon Styles
const socialMediaContainerStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  marginTop: "20px" // Add spacing above social media icons
};

const socialMediaIconStyle = {
  height: "30px", // Adjust icon size as needed
  width: "30px",
};

export const Footer = () => {
  return (
    <footer style={footerStyle}>
      <section style={sectionStyle}>
        <div>
          <img src="./images/Logo.png" alt="logo" style={logoStyle} />
        </div>

        <div>
          <h3>Navigation</h3>
          <ul style={listStyle}>
            <li>Home</li>
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
      </section>

      {/* Social Media Icons */}
      <div style={socialMediaContainerStyle}>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="./images/facebook-icon.svg" alt="Facebook" style={socialMediaIconStyle} />
        </a>
        <a href="https://x.com/Satyasootar" target="_blank" rel="noopener noreferrer">
          <img src="./images/twitter-icon.svg" alt="Twitter" style={socialMediaIconStyle} />
        </a>
        <a href="https://www.instagram.com/satyasootar/" target="_blank" rel="noopener noreferrer">
          <img src="./images/instagram-icon.svg" alt="Instagram" style={socialMediaIconStyle} />
        </a>
        <a href="https://www.linkedin.com/in/satyaprangyasootar/" target="_blank" rel="noopener noreferrer">
          <img src="./images/linkedIn-icon.svg" alt="LinkedIn" style={socialMediaIconStyle} />
        </a>
        <a href="https://github.com/satyasootar" target="_blank" rel="noopener noreferrer">
          <img src="./images/github-icon.svg" alt="LinkedIn" style={socialMediaIconStyle} />
        </a>
        <a href="https://www.figma.com/design/QZGV5brqRzVV3hZnkHL4lT/Little-Lemon?node-id=7-309&node-type=canvas&t=89EPyrEzIFA9zpAs-0" target="_blank" rel="noopener noreferrer">
          <img src="./images/figma-icon.svg" alt="LinkedIn" style={socialMediaIconStyle} />
        </a>
      </div>

      <p>All rights reserved © Little Lemon</p>
    </footer>
  );
};
