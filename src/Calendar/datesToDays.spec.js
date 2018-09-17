import { datesToDays } from './datesToDays.js'

it('converts dates to day objects', () => {
  const dates = [
    new Date(2001, 2, 3, 12),
    new Date(2004, 5, 6, 12),
  ]

  const currentDate = new Date(2003, 1, 1, 12)

  const expected = [
    {
      dayId: '2-3',
      dayOfWeek: 6,
      day: 3,
      isInPast: true,
    },
    {
      dayId: '2-5',
      dayOfWeek: 6,
      day: 6,
      isInPast: false,
    }
  ]

  expect(datesToDays(dates, currentDate))
})
