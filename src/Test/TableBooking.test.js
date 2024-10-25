
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TableBooking from './components/TableBooking.jsx'; 


// Mock the useNavigate hook
jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('TableBooking Component', () => {
  const mockDispatch = jest.fn();
  const mockBookedTimes = [];
  const availableTimes = ['17:00', '18:00', '19:00', '20:00'];

  test('renders form with all input fields', () => {
    render(<TableBooking availableTimes={availableTimes} dispatch={mockDispatch} bookedTimes={mockBookedTimes} />);
    window.alert = jest.fn(); // Mock alert to prevent popups

    // Check if the form elements are rendered correctly
    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/guests count/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/mobile number/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /book/i })).toBeInTheDocument();
  });

  test('validates mobile number correctly', () => {
    render(<TableBooking availableTimes={availableTimes} dispatch={mockDispatch} bookedTimes={mockBookedTimes} />);
    
    const mobileInput = screen.getByLabelText(/mobile number/i);
    fireEvent.change(mobileInput, { target: { value: '123456789' } });
    
    // Check for error message
    expect(screen.getByText(/mobile number must be exactly 10 digits/i)).toBeInTheDocument();

    fireEvent.change(mobileInput, { target: { value: '1234567890' } });
    
    // Check for no error message
    expect(screen.queryByText(/mobile number must be exactly 10 digits/i)).not.toBeInTheDocument();
  });

  test('displays alert on successful booking', () => {
    render(<TableBooking availableTimes={availableTimes} dispatch={mockDispatch} bookedTimes={mockBookedTimes} />);
    
    const mobileInput = screen.getByLabelText(/mobile number/i);
    const timeSelect = screen.getByLabelText(/time/i);
    const bookButton = screen.getByRole('button', { name: /book/i });

    fireEvent.change(mobileInput, { target: { value: '1234567890' } });
    fireEvent.change(timeSelect, { target: { value: '18:00' } });
    
    // Simulate booking
    fireEvent.click(bookButton);

    // Check that the alert was called
    expect(window.alert).toHaveBeenCalledWith('Booking confirmed!');
  });

  // Add more tests as needed...
});
