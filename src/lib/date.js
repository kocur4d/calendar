export const firstDayOfMonth = (date = new Date()) => {
  return new Date(date.getFullYear(), date.getMonth(), 1, 12)
}

export const lastDayOfMonth = (date = new Date()) => {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0, 12)
}

export const startOfWeek = (date = firstDayOfMonth()) => {
  const diff = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1)
  return new Date(date.setDate(diff))
}

export const endOfWeek = (date = lastDayOfMonth()) => {
  const firstDayOfLastWeek = startOfWeek(date)
  return new Date(firstDayOfLastWeek.setDate(firstDayOfLastWeek.getDate() + 6))
}

export const datesForMonth = (from = startOfWeek(), to = endOfWeek()) => {
  const dates = []
  let stopDate = from
  while(to - stopDate >= 0) {
    dates.push(new Date(stopDate))
    stopDate.setDate(stopDate.getDate() + 1)
  }
  return dates
}
