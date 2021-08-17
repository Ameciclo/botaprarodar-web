import React from 'react';
import { render, screen } from '@testing-library/react';
import UserMenu from './UserMenu';

describe('UserMenu', () => {
  it('should be blocked', () => {
    render(<UserMenu isBlocked />);

    expect(screen.getByText('Documentos')).toBeInTheDocument();
  });

  it('should be unblocked', () => {
    render(<UserMenu isBlocked={false} />);

    expect(screen.getByText('Bloquear')).toBeInTheDocument();
  });
});
