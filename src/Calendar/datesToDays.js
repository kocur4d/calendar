import _map from 'lodash/map'

const dateId = (date) => `${date.getMonth()}-${date.getDate()}`
const isInPast = (date) => new Date() - date <= 0 ? false : true

export const datesToDays = (dates, currentDate = new Date()) => _map(
  dates,
  date => ({
    dayId: dateId(date),
    dayOfWeek: date.getDay(),
    date: date.getDate(),
    isInPast: isInPast(date)
  })
) 
