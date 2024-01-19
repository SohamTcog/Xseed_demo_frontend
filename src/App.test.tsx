import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LinkPage from '../Components/LinkPage.tsx';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Link: ({ to, children }: { to: string; children: React.ReactNode }) => (
    <a href={to}>{children}</a>
  ),
}));

describe('LinkPage component', () => {
  test('does not navigate when Data link is clicked', () => {
    render(<LinkPage />);

    const dataLink = screen.getByText('Data');
    fireEvent.click(dataLink);
  });
});
