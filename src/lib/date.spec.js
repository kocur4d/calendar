import {
  firstDayOfMonth,
  lastDayOfMonth,
  startOfWeek,
  endOfWeek,
  datesForMonth,
} from './date.js'

const SUNDAY = 0
const MONDAY = 1
const THURSDAY = 4
const SATURDAY = 6

//Sat Mar 03 2001
const date = new Date(2001, 2, 3, 12)

it('returns first day of a month for a given date', () => {
  expect(firstDayOfMonth(date).getDay()).toEqual(THURSDAY)
})

it('returns last day of a month for a given date', () => {
  expect(lastDayOfMonth(date).getDay()).toEqual(SATURDAY)
})

it('returns Monday of a first week of a month for a given date', () => {
  const first = firstDayOfMonth(date)
  expect(startOfWeek(first).getDay()).toEqual(MONDAY)
})

it('returns Sunday of a last week of a month for a given date', () => {
  const last = lastDayOfMonth(date)
  expect(endOfWeek(last).getDay()).toEqual(SUNDAY)
})

it('returns array of dates for a given month', () => {
  const first = firstDayOfMonth(date)
  const last = lastDayOfMonth(date)
  expect(datesForMonth(startOfWeek(first), endOfWeek(last))).toHaveLength(35)
})
