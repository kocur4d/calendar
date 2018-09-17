import Immutable from 'immutable'

import reducer from './index.js'
import {
  SAVE_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
} from './index.js'

it('has initial state', () => {
  const state = undefined
  const action = {type: 'other action'}
  const expected = {}

  expect(reducer(state, action).toJS()).toEqual(expected)
})

it('it adds event when SAVE_EVENT is called', () => {
  const state = undefined
  const event = {
    name: 'bob',
    secret: 'builder',
  }
  const action = {type: SAVE_EVENT, dayId: '123', event}
  const expected = {
    '123': [
      {name: 'bob', secret: 'builder'}
    ]
  }

  expect(reducer(state, action).toJS()).toEqual(expected)
})

it('it updates event when UPDATE_EVENT is called', () => {
  const state = Immutable.fromJS({
    '123': [
      {name: 'bob', secret: 'builder', eventId: 'abc'},
      {name: 'john', secret: 'galt', eventId: 'ghj'},
    ]
  })
  const event = {
    eventId: 'tgb',
    name: 'john',
    secret: 'snow',
  }
  const action = {type: UPDATE_EVENT, dayId: '123', eventId: 'ghj', event}
  const expected = {
    '123': [
      {name: 'bob', secret: 'builder', eventId: 'abc'},
      {name: 'john', secret: 'snow', eventId: 'tgb'},
    ]
  }

  expect(reducer(state, action).toJS()).toEqual(expected)
})

it('it removes event when DELETE_EVENT is called', () => {
  const state = Immutable.fromJS({
    '123': [
      {name: 'bob', secret: 'builder', eventId: 'abc'},
      {name: 'john', secret: 'snow', eventId: 'tgb'},
      {name: 'john', secret: 'galt', eventId: 'ghj'},
    ]
  })
  const action = {type: DELETE_EVENT, dayId: '123', eventId: 'tgb'}
  const expected = {
    '123': [
      {name: 'bob', secret: 'builder', eventId: 'abc'},
      {name: 'john', secret: 'galt', eventId: 'ghj'},
    ]
  }

  expect(reducer(state, action).toJS()).toEqual(expected)
})
