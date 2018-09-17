import reducer from './visible.js'
import { MODAL_TOGGLE } from './index.js'

it('has initial state', () => {
  const state = undefined
  const action = {type: 'other action'}
  const expected = false

  expect(reducer(state, action)).toEqual(expected)
})

it('it toggles visible when MODAL_TOGGLE is called', () => {
  const state = true
  const action = {type: MODAL_TOGGLE}
  const expected =  false

  expect(reducer(state, action)).toEqual(expected)
})
