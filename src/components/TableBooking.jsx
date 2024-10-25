import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const TableBooking = ({ availableTimes, dispatch, bookedTimes }) => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    occasion: 'Choose',
    date: '',
    time: '',
    guestsCount: 1,
    mobileNumber: '',
  });

  const [errors, setErrors] = useState({
    mobileNumber: '',
  });

  const navigate = useNavigate(); // Hook for programmatic navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));

    // Update available times based on selected date
    if (name === 'date') {
      dispatch({ type: 'UPDATE_DATE', payload: value });
    }

    // Validate mobile number
    if (name === 'mobileNumber') {
      if (!/^\d{10}$/.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          mobileNumber: 'Mobile number must be exactly 10 digits',
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          mobileNumber: '',
        }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Final validation check
    if (form.mobileNumber.length !== 10) {
      setErrors({ mobileNumber: 'Mobile number must be exactly 10 digits' });
      return;
    }

    // Check for double booking
    if (bookedTimes.includes(form.time)) {
      alert('This time slot is already booked. Please choose another time.');
      return;
    }

    // Simulate form submission (since we're not using an API)
    alert('Booking confirmed!'); // Mock success message

    // Pass form data to confirmation page
    navigate('/confirmation', { state: { form } });

    // Add the booked time to the bookedTimes list
    bookedTimes.push(form.time);
  };

  return (
    <form
      style={{
        backgroundColor: '#495E57',
        padding: '30px',
        maxWidth: '500px',
        borderRadius: '15px',
        color: 'white',
        margin: '0 auto',
      }}
      onSubmit={handleSubmit}
    >
      <h2 style={{ textAlign: 'center', color: '#F4CE14', marginBottom: '20px' }}>
        Book a Table
      </h2>

      {/* Form inputs */}
      <label>First name</label>
      <input
        type="text"
        name="firstName"
        value={form.firstName}
        onChange={handleChange}
        style={inputStyle}
        required
      />

      <label>Last name</label>
      <input
        type="text"
        name="lastName"
        value={form.lastName}
        onChange={handleChange}
        style={inputStyle}
        required
      />

      <label>Occasion</label>
      <select
        name="occasion"
        value={form.occasion}
        onChange={handleChange}
        style={{ ...inputStyle, paddingRight: '10px' }}
        required
      >
        <option>Choose</option>
        <option>Birthday</option>
        <option>Anniversary</option>
        <option>Engagement</option>
      </select>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginTop: '20px' }}>
        <div>
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            style={inputStyle}
            required
          />
        </div>

        <div>
          <label>Time</label>
          <select
            name="time"
            value={form.time}
            onChange={handleChange}
            style={inputStyle}
            required
          >
            {Array.isArray(availableTimes) && availableTimes.length > 0 ? (
              availableTimes.map((time, index) => (
                <option key={index} value={time}>
                  {time}
                </option>
              ))
            ) : (
              <option disabled>No available times</option>
            )}
          </select>
        </div>

        <div>
          <label>Guests count</label>
          <select
            name="guestsCount"
            value={form.guestsCount}
            onChange={handleChange}
            style={inputStyle}
            required
          >
            {[...Array(10).keys()].map(n => (
              <option key={n + 1} value={n + 1}>
                {n + 1}
              </option>
            ))}
          </select>
        </div>
      </div>

      <label>Mobile Number</label>
      <input
        type="tel"
        name="mobileNumber"
        value={form.mobileNumber}
        onChange={handleChange}
        style={{
          ...inputStyle,
          borderColor: errors.mobileNumber ? 'red' : '#ccc', // Red border on error
        }}
        placeholder="xxxxx xxxxx"
        required
      />

      {/* Display error message if phone number is invalid */}
      {errors.mobileNumber && (
        <p style={{ color: 'red', marginTop: '5px' }}>{errors.mobileNumber}</p>
      )}

      <button
        type="submit"
        style={{
          marginTop: '20px',
          margin: 'auto',
        }}
        className='btn-1'
      >
        Book
      </button>
    </form>
  );
};

// Common style for all input fields
const inputStyle = {
  width: '100%',
  padding: '10px',
  margin: '10px 0',
  borderRadius: '5px',
  border: '1px solid #ccc',
  fontSize: '16px',
  boxSizing: 'border-box',
};

export default TableBooking;
