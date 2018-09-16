import { connect } from 'react-redux'

import Modal from './Component.js'

import { modalToggle } from '../reducer.js'

const mapStateToProps = (state) => ({
  visible: state.getIn(['modal', 'visible'])
})

const mapDispatchToProps = (dispatch) => ({
  modalToggle: () => dispatch(modalToggle()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal)
