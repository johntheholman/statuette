import { render } from '@redwoodjs/testing/web'

import NomineeLayout from './NomineeLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('NomineeLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NomineeLayout />)
    }).not.toThrow()
  })
})
