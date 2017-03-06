import React from 'react'
import chai, { expect } from 'chai'

import chaiEnzyme from 'chai-enzyme'
chai.use(chaiEnzyme())

import wrapper from '~/../test/helpers/wrapper'
import ContactCard from './ContactCard'

describe('<ContactCard />', () => {
  const contactcard = wrapper(<ContactCard />)

  it('is a card', () => {
    expect(contactcard).to.have.tagName('div')
    expect(contactcard).to.have.className('card')
  })
})
