import chai, { expect } from 'chai'
import newContacts from './newContacts'

describe ('newContacts reducer', () => {
  const reducer = newContacts
  const initialState = []

  it('returns an empty array for the initial state', () => {
    expect(reducer()).to.eql(initialState)
  })
})
