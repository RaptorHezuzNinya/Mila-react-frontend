import React from 'react'
import chai, { expect } from 'chai'
import { shallow } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import ContactItem from './ContactItem'

chai.use(chaiEnzyme())

describe('<ContactItem />', () => {
  const props = {
    contactId: 1,
    firstName: 'Adrian',
    lastName: 'DePadrian',
    companyRole: 'CEO',
    companyName: 'Compainay',
    email: 'adrian@compainay.com',
  };
  const wrapper = shallow(<ContactItem {...props} />);

  it('renders without exploding', () => {
    expect(wrapper).to.have.length(1)
  })

  it('contains a className "contactItem"', () => {
    expect(wrapper).to.have.className('contactItem')
  })

  it('displays the name of the contact', () => {
    expect(wrapper.find('h3')).to.have.text('Adrian DePadrian')
  })

  it('displays the email adress of the contact', () => {
    expect(wrapper.find('p')).to.have.text('adrian@compainay.com')
  })
})
