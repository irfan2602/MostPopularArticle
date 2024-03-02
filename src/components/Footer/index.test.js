import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Footer from './Footer';

jest.mock('../UseFetch/useFetch');

describe('Footer component', () => {
  test('renders footer with copyright information', async () => {
    // Mock data for useFetch
    const mockData = { copyright: 'Copyright © 2024' };
    require('../UseFetch/useFetch').default.mockReturnValue([mockData]);

    render(<Footer />);

    // Wait for the component to finish fetching data
    await waitFor(() => {
      expect(screen.getByTestId('footer')).toHaveTextContent('Copyright © 2024');
    });
  });
});
