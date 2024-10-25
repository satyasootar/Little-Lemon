import React, { useReducer, useEffect, useState } from 'react';
import TableBooking from './TableBooking';


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


const initializeTimes = () => {
  return localAvailableTimes; 
};


const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_DATE':
      return localAvailableTimes;
    default:
      return state;
  }
};

export const TableBookingParent = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const [bookedTimes, setBookedTimes] = useState([]); 

  useEffect(() => {
    
    dispatch({ type: 'UPDATE_DATE', payload: null });
  }, []);

  // Function to handle booking times
  const handleBooking = (time) => {
    if (!bookedTimes.includes(time)) {
      setBookedTimes((prevBookedTimes) => [...prevBookedTimes, time]);
    }
  };

  return (
    <div>
      <TableBooking 
        availableTimes={availableTimes} 
        dispatch={dispatch} 
        bookedTimes={bookedTimes} 
        onBook={handleBooking} 
      />
    </div>
  );
};
