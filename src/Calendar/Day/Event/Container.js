import { connect } from 'react-redux'

import Event from './Component.js'

import { modalToggle } from '../../../reducer.js'

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch, {dayId, eventId}) => ({
  modalToggle: (e) => {
    e.stopPropagation()
    dispatch(modalToggle({dayId, eventId}))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Event)
