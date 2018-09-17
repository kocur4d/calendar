import React from 'react'
import { shallow } from 'enzyme'

import Day from './Component.js'

describe('<Day/>', () => {
  const props = {
    dayId: '123',
    date: '17',
    isInPast: true,
    events: [{eventId: 'qwe', count: 'one'}, {eventId: 'asd', count: 'two'}],
  }

  it('renders Date component', () => {
    const wrapper = shallow(<Day {...props}/>)
    const component = wrapper.find('Date')

    expect(component).toHaveLength(1)
    expect(component.props()).toEqual({
      date: '17',
      isInPast: true,
    })
  })

  it('renders Event component', () => {
    const wrapper = shallow(<Day {...props}/>)
    const component = wrapper.find('Connect(Event)')

    expect(component).toHaveLength(2)
    expect(component.first().props()).toEqual({
      eventId: "qwe",
      count: "one",
      dayId: "123",
    })
    expect(component.last().props()).toEqual({
      eventId: "asd",
      count: "two",
      dayId: "123",
    })
  })
})
