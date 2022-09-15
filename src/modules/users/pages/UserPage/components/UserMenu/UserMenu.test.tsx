import React from 'react';
import { render, screen } from '@testing-library/react';
import UserMenu from './UserMenu';

describe('UserMenu', () => {
  it('should be blocked', () => {
    render(<UserMenu isBlocked onToggleBlock={jest.fn()} />);

    expect(screen.getByText('Desbloquear')).toBeInTheDocument();
  });

  it('should be unblocked', () => {
    render(<UserMenu isBlocked={false} onToggleBlock={jest.fn()} />);

    expect(screen.getByText('Bloquear')).toBeInTheDocument();
  });
});
