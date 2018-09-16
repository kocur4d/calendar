import { connect } from 'react-redux'

import Day from './Component.js'

import { modalToggle } from '../../reducer.js'

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch, {isInPast}) => ({
  modalToggle: () => !isInPast && dispatch(modalToggle()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Day)
