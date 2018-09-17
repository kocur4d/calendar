import _isEmpty from 'lodash/isEmpty'

const all = (...fns) => (input) => fns.every(fun => fun(input))

//startTime
const startTimeIsPositive = (state) => parseInt(state.startTime, 10) >= 0
const startTimeIsLessThen24 = (state) => parseInt(state.startTime, 10) < 24 

//endTime
const endTimeIsPositive = (state) => parseInt(state.endTime, 10) >= 0
const endTimeIsNoMoreThen24 = (state) => parseInt(state.endTime, 10) < 25 

const areOverlapping = (first) => (second) => {
  const firstStartTime = parseInt(first.startTime, 10)
  const firstEndTime = parseInt(first.endTime, 10)
  const secondStartTime = parseInt(second.startTime, 10)
  const secondEndTime = parseInt(second.endTime, 10)

  if(secondStartTime < firstStartTime) {
    return secondEndTime > firstStartTime
  } else {
    return secondStartTime < firstEndTime
  }
}

export const validateName = (state) => !_isEmpty(state.name)

export const validateStartTime = all(
  startTimeIsPositive,
  startTimeIsLessThen24,
)

export const validateEndTime = all(
  endTimeIsPositive,
  endTimeIsNoMoreThen24,
)

export const validateStartTimeIsBeforeEndTime = (state) => 
  parseInt(state.startTime, 10) < parseInt(state.endTime, 10)

export const validateOverlapping = (state) => !state.events.find(areOverlapping(state))

export default all(
  validateName,
  validateStartTime,
  validateEndTime,
  validateStartTimeIsBeforeEndTime,
  validateOverlapping,
)
