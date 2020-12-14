import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

// more information about testing can be found from here: https://github.com/testing-library/jest-dom

test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
