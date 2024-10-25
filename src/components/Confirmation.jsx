import React from 'react';
import { useLocation } from 'react-router-dom';

export const Confirmation = () => {
  const location = useLocation();
  const { form } = location.state || {}; 

  if (!form) {
    return <div>No booking details found.</div>; 
  }

  return (
    <div style={containerStyle}>
      <img src='./images/confirmationLogo.svg' alt='logo' style={imageStyle} />
      <div style={cardStyle}>
        <h2 style={headerStyle}>Booking Confirmation</h2>
        <div style={infoStyle}>
          <p><strong>First Name:</strong> {form.firstName}</p>
          <p><strong>Last Name:</strong> {form.lastName}</p>
          <p><strong>Occasion:</strong> {form.occasion}</p>
          <p><strong>Date:</strong> {form.date}</p>
          <p><strong>Time:</strong> {form.time}</p>
          <p><strong>Guests Count:</strong> {form.guestsCount}</p>
          <p><strong>Mobile Number:</strong> {form.mobileNumber}</p>
        </div>
      </div>
    </div>
  );
};


const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: '#F9F9F9',
  padding: '20px',
};

const imageStyle = {
  width: '500px',
  marginBottom: '20px',
};

const cardStyle = {
  backgroundColor: '#495E57',
  padding: '30px',
  borderRadius: '15px',
  color: 'white',
  width: '400px',
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  transition: 'transform 0.2s', 
};

const headerStyle = {
  textAlign: 'center',
  margin: '10px 0',
};

const infoStyle = {
  margin: '20px 0',
};

export default Confirmation;
