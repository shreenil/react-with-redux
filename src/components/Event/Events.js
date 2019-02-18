import React, { Component } from 'react'
import { events } from './event-data';
import EventRow from './EventRow';
import styles from './event.module.css'
import { connect } from "react-redux";
import { fetchEvents, deleteEvent } from '../../redux/actions/eventActions'


class Events extends Component {

  EDIT_MODE = false;

  constructor(props) {
    super(props)

    
  }

  componentWillMount() {
    this.props.fetchEvents();
  }

  enableEditMode = (event) => {
    this.props.history.push({
      pathname: '/edit',
      state: { MODE: 'EDIT', event: event },
      submitHandler: this.saveRecord
    });
  }

  saveRecord(event) {
    
  }

  enableAddMode = () => {
    this.props.history.push({
      pathname: '/add',
      state: { MODE: 'ADD' },
      submitHandler: this.saveRecord
    })
  }

  deleteButtonHandler = (item) => {
    if(window.confirm(`Are you sure want to delete this record ?`)) {
      this.props.deleteEvent(item);
      
    }
  }

  render() {
    let { events } = this.props.events;
    let eventList = events ? (
      events.map(event => <EventRow deleteButtonHandler={this.deleteButtonHandler} editButtonHandler={this.enableEditMode} key={event.id} event={event} />)
    ) : (
        <tr>
          <td>No records to show.</td>
        </tr>
      )
    return (
      <div >
        <table className="table table-bordered">
          <caption className={styles.caption}>
            <button onClick={() => this.enableAddMode()} className="btn btn-success">
              <span className="glyphicon glyphicon-plus"></span> Add new
                 </button>
          </caption>
          <thead>
            <tr>
              <th>Event</th>
              <th>Created By</th>
              <th>Date & Time</th>
              <th>Venue</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {eventList}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state, ownState) => {
  return {
    events: state.events
  }
}

export default connect(mapStateToProps, { fetchEvents, deleteEvent })(Events)
