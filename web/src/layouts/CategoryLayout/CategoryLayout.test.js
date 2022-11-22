import { render } from '@redwoodjs/testing/web'

import CategoryLayout from './CategoryLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CategoryLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CategoryLayout />)
    }).not.toThrow()
  })
})
