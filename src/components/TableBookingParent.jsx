import React, { useReducer, useEffect, useState } from 'react';
import TableBooking from './TableBooking';

// Local available times data
const localAvailableTimes = [
  '12:00 PM',
  '12:30 PM',
  '1:00 PM',
  '1:30 PM',
  '2:00 PM',
  '2:30 PM',
  '3:00 PM',
  '3:30 PM',
  '4:00 PM',
  '4:30 PM',
  '5:00 PM',
  '5:30 PM',
  '6:00 PM',
  '6:30 PM',
  '7:00 PM',
];

// Initialize times
const initializeTimes = () => {
  return localAvailableTimes; // Return the local available times
};

// Update times reducer
const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_DATE':
      return localAvailableTimes; // Use local times regardless of the selected date
    default:
      return state;
  }
};

export const TableBookingParent = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const [bookedTimes, setBookedTimes] = useState([]); // State for booked times

  useEffect(() => {
    // Initialize available times on component mount
    dispatch({ type: 'UPDATE_DATE', payload: null }); // You can pass null as payload since we are not using it
  }, []);

  return (
    <div>
      <TableBooking availableTimes={availableTimes} dispatch={dispatch} bookedTimes={bookedTimes} />
    </div>
  );
};
