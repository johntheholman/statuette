import { render } from '@redwoodjs/testing/web'

import NomineePage from './NomineePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('NomineePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NomineePage />)
    }).not.toThrow()
  })
})
