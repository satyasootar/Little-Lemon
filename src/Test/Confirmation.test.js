
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import Confirmation from '.componenets/Confirmation'; // Adjust the import path as needed

describe('Confirmation Component', () => {
  test('renders booking details when form data is provided', () => {
    const mockFormData = {
      firstName: 'John',
      lastName: 'Doe',
      occasion: 'Birthday',
      date: '2024-10-31',
      time: '18:00',
      guestsCount: 4,
      mobileNumber: '1234567890',
    };

    render(
      <MemoryRouter initialEntries={['/confirmation']}>
        <Route path="/confirmation">
          <Confirmation />
        </Route>
      </MemoryRouter>
    );

    // Mock the location state
    window.history.replaceState({ form: mockFormData }, '', '/confirmation');

    // Check if booking details are displayed
    expect(screen.getByText(/Booking Confirmation/i)).toBeInTheDocument();
    expect(screen.getByText(/First Name:/i)).toHaveTextContent('First Name: John');
    expect(screen.getByText(/Last Name:/i)).toHaveTextContent('Last Name: Doe');
    expect(screen.getByText(/Occasion:/i)).toHaveTextContent('Occasion: Birthday');
    expect(screen.getByText(/Date:/i)).toHaveTextContent('Date: 2024-10-31');
    expect(screen.getByText(/Time:/i)).toHaveTextContent('Time: 18:00');
    expect(screen.getByText(/Guests Count:/i)).toHaveTextContent('Guests Count: 4');
    expect(screen.getByText(/Mobile Number:/i)).toHaveTextContent('Mobile Number: 1234567890');
  });

  test('displays message when no booking details are found', () => {
    render(
      <MemoryRouter initialEntries={['/confirmation']}>
        <Route path="/confirmation">
          <Confirmation />
        </Route>
      </MemoryRouter>
    );

    // Mock the location state as empty
    window.history.replaceState({}, '', '/confirmation');

    // Check for the "no booking details found" message
    expect(screen.getByText(/No booking details found/i)).toBeInTheDocument();
  });
});
