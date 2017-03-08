import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';

import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme())

import { NewContactsContainer } from './NewContactsContainer'

describe('<NewContactsContainer />', () => {
  const wrapper = shallow(<NewContactsContainer />)

  it('renders without exploding', () => {
    expect(wrapper).to.have.length(1)
  })
})
