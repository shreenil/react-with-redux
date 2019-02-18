import React, { Component } from 'react'
import { connect } from "react-redux";
import { addEvent, updateEvent } from "../../redux/actions/eventActions";

class EventForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            event: this.props.location.state.event,
            MODE: this.props.location.state.MODE,
            formGroup: (this.props.location && this.props.location.state && this.props.location.state.event) ? this.props.location.state.event : {
                EventTitle: '',
                CreatedBy: '',
                EventDate: '',
                Venue: ''
            }
        }
        
    }

    handleChange = (event) => {
        
        this.setState({
            formGroup: { ...this.state.formGroup, [event.target.name]: event.target.value }
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        
        
        // this.props.location.submitHandler(this.state.formGroup);
        if (this.state.MODE === "ADD")
            this.props.addEvent(this.state.formGroup);
        else {
            let events = Object.assign({}, this.state.event, this.state.formGroup);
            this.props.updateEvent(events);
        }
        this.props.history.goBack();
    }

    componentDidMount() {
        
    }

    render() {
        let MODE = this.state.MODE;
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">{(MODE === "ADD") ? 'Add' : 'Edit'} Event</h3>
                </div>
                <div className="panel-body">
                    <form ref={myForm => this.myForm = myForm} onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Event Title</label>
                            <input className="form-control" name="EventTitle" type="text" value={this.state.formGroup.EventTitle} onChange={this.handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Creator</label>
                            <input className="form-control" name="CreatedBy" type="text" value={this.state.formGroup.CreatedBy} onChange={this.handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Date & Time</label>
                            <input className="form-control" name="EventDate" type="text" value={this.state.formGroup.EventDate} onChange={this.handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Venue</label>
                            <input className="form-control" name="Venue" type="text" value={this.state.formGroup.Venue} onChange={this.handleChange} required />
                        </div>
                        <button type="submit" className="btn btn-success">Save</button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        events: state.events
    }
}

export default connect(mapStateToProps, { addEvent, updateEvent })(EventForm)
