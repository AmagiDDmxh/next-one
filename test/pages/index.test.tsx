import React from 'react'
import { render, fireEvent } from '../testUtils'
import { Home } from '../../pages/index'

describe('Home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Home />, {})
    expect(asFragment()).toMatchSnapshot()
  })

  it('clicking button', () => {
    const { getByText } = render(<Home />, {})
    const button = getByText('Check availability')
    button.onclick = jest.fn
    fireEvent.click(button)
    expect(button.onclick).toBeCalled()
  })
})
