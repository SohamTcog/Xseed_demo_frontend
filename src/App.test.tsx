import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import LinkPage from './Components/LinkPage';
//import LinkPage from '../Components/LinkPage';

// jest.mock('react-router-dom', () => ({
//   ...jest.requireActual('react-router-dom'),
//   Link: ({ to, children }: { to: string; children: React.ReactNode }) => (
//     <a href={to}>{children}</a>
//   ),
// }));

// describe('LinkPage component', () => {
//   test('does not navigate when Data link is clicked', () => {
//     render(<LinkPage />);

//     const dataLink = screen.getByText('Data');
//     fireEvent.click(dataLink);
//   });
// });


describe('LinkPage component', () => {
  test('renders Display component when "Data" link is clicked', async () => {
    render(
      <Router>
        <LinkPage />
      </Router>
    );

    // Click on the link
    fireEvent.click(screen.getByText('Data'));

    // Wait for the asynchronous code to finish (you can adjust the time if needed)
    await screen.findByText('Weather Forecast');

    // Check if the Display component is rendered
    expect(screen.getByText('Weather Forecast')).toBeInTheDocument();
  });
});
