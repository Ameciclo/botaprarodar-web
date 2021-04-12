import { Dashboard } from '.'
import { render, screen } from '@testing-library/react'

describe('<Dashboard />', () => {
  it('Should see comunidades and bicicletas on the screen', () => {
    render(<Dashboard />)

    expect(screen.getByText(/comunidades/i)).toBeInTheDocument()
    expect(screen.getByText(/bicicletas/i)).toBeInTheDocument()
  })
})
