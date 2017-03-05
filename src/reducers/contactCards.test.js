import chai, { expect } from 'chai'
import contactCards from './contactCards'

describe ('contactCards reducer', () => {
  const reducer = contactCards
  const initialState = [
    {
      id: 1,
      firstName: 'Adrian',
      lastName: 'DePadrian',
      companyRole: 'CEO',
      companyName: 'Compainay',
      email: 'adrian@compainay.com'
    },
    {
      id: 2,
      firstName: 'Tanja',
      lastName: 'BlaBla',
      companyRole: 'CEO',
      companyName: 'Compainay',
      email: 'tanja@compainay.com'
    }
  ]

  it('returns the initial state', () => {
    expect(reducer()).to.eql([
      {
        id: 1,
        firstName: 'Adrian',
        lastName: 'DePadrian',
        companyRole: 'CEO',
        companyName: 'Compainay',
        email: 'adrian@compainay.com'
      },
      {
        id: 2,
        firstName: 'Tanja',
        lastName: 'BlaBla',
        companyRole: 'CEO',
        companyName: 'Compainay',
        email: 'tanja@compainay.com'
      }
    ])
  })
})
