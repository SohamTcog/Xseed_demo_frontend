import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
import LinkPage from './LinkPage';

// Mock the react-router-dom Link component
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Link: ({ to, children }: { to: string; children: React.ReactNode }) => (
    <a href={to}>{children}</a>
  ),
}));

describe('LinkPage component', () => {
  test('redirects to Display page when Data link is clicked', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <LinkPage />
      </Router>
    );

    const dataLink = screen.getByText('Data');
    fireEvent.click(dataLink);

    // Check if the URL has been updated to "/display"
    expect(history.location.pathname).toBe('/display');
  });
});
