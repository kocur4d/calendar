import {
  validateName,
  validateStartTime,
  validateEndTime,
  validateStartTimeIsBeforeEndTime,
} from './validate.js'

it('is valid with a name', () =>
  expect(validateName({name: 'bob'})).toEqual(true)
)

it('is not valid without a name', () =>
  expect(validateName({})).toEqual(false)
)

it('is not valid without startTime', () =>
  expect(validateStartTime({})).toEqual(false)
)

it('is not valid with negative startTime', () =>
  expect(validateStartTime({startTime: '-1'})).toEqual(false)
)

it('is not valid with startTime over 23', () =>
  expect(validateStartTime({startTime: '24'})).toEqual(false)
)

it('is not valid without endTime', () =>
  expect(validateEndTime({})).toEqual(false)
)

it('is not valid with negative endTime', () =>
  expect(validateEndTime({endTime: '-1'})).toEqual(false)
)

it('is not valid with endTime over 24', () =>
  expect(validateEndTime({endTime: '25'})).toEqual(false)
)

it('is not valid if start time is after end time', () =>
  expect(validateStartTimeIsBeforeEndTime({endTime: '4', startTime: '23'})).toEqual(false)
)

it('is valid when endTime is after startTime', () =>
  expect(validateStartTimeIsBeforeEndTime({endTime: '24', startTime: '11'})).toEqual(true)
)
