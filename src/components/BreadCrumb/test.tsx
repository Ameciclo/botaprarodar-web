import { BreadCrumb } from '.'
import { fireEvent, render, screen } from '@testing-library/react'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

describe('<BreadCrumb />', () => {
  it('should returns null if asPath is root', () => {
    useRouter.mockImplementation(() => ({
      asPath: '/'
    }))

    render(<BreadCrumb />)

    expect(screen.queryByRole('navigation')).toBeNull()
  })

  it('should returns current pathname if not root', () => {
    useRouter.mockImplementation(() => ({
      asPath: '/users'
    }))

    render(<BreadCrumb />)

    expect(screen.queryAllByRole('listitem').length).toBe(1)
  })

  it('should returns path params formatted', () => {
    useRouter.mockImplementation(() => ({
      asPath: '/users/1'
    }))

    render(<BreadCrumb />)

    expect(screen.getByText(/usuários/i)).toHaveAttribute('href', '/users')
  })

  it('shouldd navigate to correct path when click', () => {
    useRouter.mockImplementation(() => ({
      asPath: '/users/1'
    }))

    render(<BreadCrumb />)
    const link = screen.getByText(/usuários/i)

    fireEvent.click(link)

    expect(link).toHaveAttribute('href', '/users')
  })
})
