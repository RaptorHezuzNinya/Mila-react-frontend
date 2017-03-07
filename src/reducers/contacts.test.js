import chai, { expect } from 'chai'
import contacts from './contacts'

describe ('contacts reducer', () => {
  const reducer = contacts
  const initialState = [
    {
      contactId: 1,
      firstName: 'Adrian',
      lastName: 'DePadrian',
      companyRole: 'CEO',
      companyName: 'Compainay',
      email: 'adrian@compainay.com'
    },
    {
      contactId: 2,
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
        contactId: 1,
        firstName: 'Adrian',
        lastName: 'DePadrian',
        companyRole: 'CEO',
        companyName: 'Compainay',
        email: 'adrian@compainay.com'
      },
      {
        contactId: 2,
        firstName: 'Tanja',
        lastName: 'BlaBla',
        companyRole: 'CEO',
        companyName: 'Compainay',
        email: 'tanja@compainay.com'
      }
    ])
  })
})
