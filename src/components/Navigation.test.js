import React from 'react'
import chai, { expect } from 'chai'

import chaiEnzyme from 'chai-enzyme'
chai.use(chaiEnzyme())

import spies from 'chai-spies'
chai.use(spies)

import wrapper from '../../test/helpers/wrapper'
import { Navigation } from './Navigation'

describe('<Navigation/>', () => {
  const navigation = wrapper(<Navigation />)

  it('contains a header', () => {
    expect(navigation).to.have.className('nav-bar')
  })
})
