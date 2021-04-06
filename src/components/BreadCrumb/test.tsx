import { BreadCrumb } from '.'
import { render } from '@testing-library/react'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')

describe('user', () => {
  test('renders a message', () => {
    useRouter.mockImplementation(() => ({
      asPath: '/community'
    }))

    const { container } = render(<BreadCrumb />)

    console.log(container)
  })
})
