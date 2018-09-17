import reducer from './dayId.js'
import { MODAL_TOGGLE } from './index.js'

it('has initial state', () => {
  const state = undefined
  const action = {type: 'other action'}
  const expected = null

  expect(reducer(state, action)).toEqual(expected)
})

it('it clears dayId when generic MODAL_TOGGLE is called', () => {
  const state = '1234'
  const action = {type: MODAL_TOGGLE}
  const expected = null

  expect(reducer(state, action)).toEqual(expected)
})

it('it sets new dayId when MODAL_TOGGLE with dayId is called', () => {
  const state = '1234'
  const action = {type: MODAL_TOGGLE, dayId: 'abc'}
  const expected = 'abc'

  expect(reducer(state, action)).toEqual(expected)
})
