import React, { Component } from 'react'
import classNames from 'classnames'
import uuid from 'uuid'

import validate from './validate.js'

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

  componentDidUpdate(prevProps) {
    if(!prevProps.event && this.props.event) {
      this.setState({
        name: this.props.event.name,
        startTime: this.props.event.startTime,
        endTime: this.props.event.endTime,
      })
    }
  }

  update(key) {
    return (e) => {
      this.setState({[key]: e.target.value})
    }
  }

  validate() {
    return validate(Object.assign({}, this.state, {events: this.props.events}))
  }

  closeModal() {
    this.props.modalToggle()
    this.setState({
      name: '',
      startTime: '0',
      endTime: '23',
    })
  }

  onCancel() {
    this.closeModal()
  }

  onSave() {
    const newEvent = Object.assign({}, this.state, {eventId: uuid()})
    this.props.saveEvent(this.props.dayId, newEvent)
    this.closeModal()
  }

  onUpdate() {
    const newEvent = Object.assign({}, this.state, {eventId: uuid()})
    this.props.updateEvent(this.props.dayId, this.props.eventId, newEvent)
    this.closeModal()
  }

  onDelete() {
    this.props.deleteEvent(this.props.dayId, this.props.eventId)
    this.closeModal()
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
          <button className={classNames({hidden: this.props.eventId})} onClick={() => this.onSave()} disabled={!this.validate()}>Save</button>
          <button className={classNames({hidden: !this.props.eventId})} onClick={() => this.onUpdate()} disabled={!this.validate()}>Update</button>
          <button className={classNames({hidden: !this.props.eventId})} onClick={() => this.onDelete()}>Delete</button>
          <button onClick={() => this.onCancel()}>Cancel</button>
        </section>
      </div>
    </div>
  }
}

export default Modal
