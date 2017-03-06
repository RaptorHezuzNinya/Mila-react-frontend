import React from 'react'
import chai, { expect } from 'chai'
import wrapper from '../../test/helpers/wrapper'

import { Navigation } from './Navigation'

describe('<Navigation/>', () => {
  const navigation = wrapper(<Navigation />)

  it('contains a header', () => {
    expect(navigation).to.have.className('nav-bar')
  })
})
