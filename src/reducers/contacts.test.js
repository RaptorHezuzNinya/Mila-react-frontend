import chai, { expect } from 'chai'
import deepFreeze from 'deep-freeze-node'
import contact from './contacts'

import { UPDATE_CONTACT } from '~/actions/contacts/update'

describe ('contact reducer initial state', () => {
  const reducer = contact
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

describe('contact', () => {
  describe(UPDATE_CONTACT, () => {
    console.log(this.state)
    const initialState = deepFreeze([{
      firstName: 'Adrian',
      lastName: 'DePadrian',
      companyRole: 'CEO',
      companyName: 'Compainay',
      email: 'adrian@compainay.com'
    }])

    const editedContact = deepFreeze([{
      firstName: 'Unicorn',
      lastName: 'Awesomeness',
      companyRole: 'KingPing'
    }])

    const finalState = deepFreeze([{
      firstName: 'Unicorn',
      lastName: 'Awesomeness',
      companyRole: 'KingPing',
      companyName: 'Compainay',
      email: 'adrian@compainay.com'
    }])

    const action = deepFreeze({
      type: UPDATE_CONTACT,
      payload: editedContact
    })

    it('updates the contact', () => {
      expect(contact(initialState, action)).to.eql(finalState)
    })
  })
})
