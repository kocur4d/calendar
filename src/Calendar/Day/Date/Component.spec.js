import React from 'react'
import { shallow } from 'enzyme'

import Date from './Component.js'

describe('<Date/>', () => {
  it('renders paragraph with inpast class', () => {
    const props = {
      date: '17',
      isInPast: true,
    }
    const wrapper = shallow(<Date {...props}/>)
    const component = wrapper.find('p')

    expect(component.hasClass('date')).toEqual(true)
    expect(component.hasClass('inpast')).toEqual(true)
    expect(component.text()).toEqual('17')
  })

  it('renders paragraph without inpast class', () => {
    const props = {
      date: '17',
      isInPast: false,
    }
    const wrapper = shallow(<Date {...props}/>)
    const component = wrapper.find('p')

    expect(component.hasClass('date')).toEqual(true)
    expect(component.hasClass('inpast')).toEqual(false)
    expect(component.text()).toEqual('17')
  })
})
