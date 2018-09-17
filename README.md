# Live demo
[https://kocur4d.github.io/calendar/](https://kocur4d.github.io/calendar/)

# Development
```
git clone git@github.com:kocur4d/calendar.git
cd calendar
yarn start
```
Running tests
```
yarn test
```
Scss to css
```
yarn watch-css
```
# About
Calendar is a web app which let you organise meetings for a given month.
When you click on the current day or day in a future you can add new event.
There are some constraints enforced on event:
* event must have a name
* event start and end time must be between 0 - 24
* endTime can't be before startTime
* events within one day can't overlap

# Testing
I didn't have enough time to provide a full test coverage. I picked few places to show how I test.
I would normally spend more time on it to produce better test coverage.

## Components
* [Day component](https://github.com/kocur4d/calendar/blob/master/src/Calendar/Day/Component.spec.js)
* [Date component](https://github.com/kocur4d/calendar/blob/master/src/Calendar/Day/Date/Component.spec.js)
## Reducers
* [events reducer](https://github.com/kocur4d/calendar/blob/master/src/reducers/Events/index.spec.js)
* [modal dayId reducer](https://github.com/kocur4d/calendar/blob/master/src/reducers/Modal/dayId.spec.js)
* [modal eventId reducer](https://github.com/kocur4d/calendar/blob/master/src/reducers/Modal/eventId.spec.js)
* [modal visible reducer](https://github.com/kocur4d/calendar/blob/master/src/reducers/Modal/visible.spec.js)
## Vanila JS libs
* [lib/date](https://github.com/kocur4d/calendar/blob/master/src/lib/date.spec.js)
* [dates to date](https://github.com/kocur4d/calendar/blob/master/src/Calendar/datesToDays.spec.js)

# Things that are missing

I didn't manage to add a notification system to enhance user experience. As far as I am concerned all off the constraints on event are working as expected there are no indication, other then the disabled button, to tell user about what is wrong.

Modal component is getting little bit out of hand. It started simple and I was keeping adding thing to it. It is in need of refactoring.

Both of those things are caused by lack of time on my side. I would address them, plus increasing test coverage, first in a real project.
