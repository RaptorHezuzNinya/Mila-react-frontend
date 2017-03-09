import React from 'react'
import chai, { expect } from 'chai'

import chaiEnzyme from 'chai-enzyme'
chai.use(chaiEnzyme())

import wrapper from '~/../test/helpers/wrapper'
import Contact from './Contact'

describe('<Contact />', () => {
  const contact = wrapper(<Contact />)

  it('is a card', () => {
    expect(contact).to.have.tagName('div')
    expect(contact).to.have.className('contact-card-container')
  })

  it('renders without exploding', () => {
    expect(wrapper).to.have.length(1)
  })
})
