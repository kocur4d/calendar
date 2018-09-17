import reducer from './eventId.js'
import { MODAL_TOGGLE } from './index.js'

it('has initial state', () => {
  const state = undefined
  const action = {type: 'other action'}
  const expected = null

  expect(reducer(state, action)).toEqual(expected)
})

it('it clears eventId when generic MODAL_TOGGLE is called', () => {
  const state = '1234'
  const action = {type: MODAL_TOGGLE}
  const expected = null

  expect(reducer(state, action)).toEqual(expected)
})

it('it sets new eventId when MODAL_TOGGLE with eventId is called', () => {
  const state = '1234'
  const action = {type: MODAL_TOGGLE, eventId: 'abc'}
  const expected = 'abc'

  expect(reducer(state, action)).toEqual(expected)
})
