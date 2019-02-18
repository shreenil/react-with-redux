import axios from "axios";
import { FETCH_EVENTS, ADD_EVENTS, UPDATE_EVENTS, DELETE_EVENTS } from "./types";

const url = 'http://localhost:8000/events';

export const fetchEvents = () => dispatch => {

    axios.get(url)
        .then(events => {
            dispatch({
                type: FETCH_EVENTS,
                payload: events.data
            })
        });

}

export const addEvent = (data) => dispatch => {

    axios.post(url, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        
        dispatch({
            type: ADD_EVENTS,
            payload: res.data
        })
    })

}

export const updateEvent = (data) => dispatch => {

    axios.put(url + "/" + data.id, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        
        dispatch({
            type: UPDATE_EVENTS,
            payload: data
        })
    })

}

export const deleteEvent = (data) => dispatch => {
    

    axios.delete(url + "/" + data.id, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        
        dispatch({
            type: DELETE_EVENTS,
            payload: data.id
        })
    })

}

