import chai, { expect } from 'chai'
import contactCard from './contactCard'

describe ('contactCard reducer', () => {
  const reducer = contactCard
  const initialState = []

  it('returns an empty array for the initial state', () => {
    expect(reducer()).to.eql(initialState)
  })
})
