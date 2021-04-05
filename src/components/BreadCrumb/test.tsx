import { BreadCrumb } from '.'
import { render } from '@testing-library/react'

describe('user', () => {
  test('renders a message', () => {
    const { container } = render(<BreadCrumb />)
    console.log(container)
  })
})
