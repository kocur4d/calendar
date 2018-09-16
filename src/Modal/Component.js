import React, { Component } from 'react'
import classNames from 'classnames'
import _isEmpty from 'lodash/isEmpty'

import './style.css'

class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      startTime: '0',
      endTime: '23',
    }
  }

  update(key) {
    return (e) => {
      this.setState({[key]: e.target.value})
    }
  }

  validate() {
    return (
      _isEmpty(this.state.name) || 
      _isEmpty(this.state.startTime) || 
      _isEmpty(this.state.endTime) ||
      parseInt(this.state.startTime, 10) >= parseInt(this.state.endTime, 10)
    )
  }

  onCancel(e) {
    this.props.modalToggle()
    this.setState({
      name: '',
      startTime: '0',
      endTime: '23',
    })
  }

  render() {
    return <div className={classNames('modal', {'visible': this.props.visible})}>
      <div className='modal-main'>
        <h2>Event</h2>
        <section>
          <label htmlFor='name'>Name</label>
          <input id='name' type='text' value={this.state.name} onChange={this.update('name')}/>
        </section>
        <section>
          <label htmlFor='startTime'>Start time</label>
          <input id='startTime' type='number' value={this.state.startTime} onChange={this.update('startTime')} min='0' max={this.state.endTime || 23}/>
        </section>
        <section>
          <label htmlFor='endTime'>End time</label>
          <input id='endTime' type='number' value={this.state.endTime} onChange={this.update('endTime')} min={this.state.startTime || 1} max={23}/>
        </section>
        <section>
          <button disabled={this.validate()}>Save</button>
          <button onClick={() => this.onCancel()}>Cancel</button>
        </section>
      </div>
    </div>
  }
}

export default Modal
