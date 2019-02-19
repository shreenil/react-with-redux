import { FETCH_EVENTS, ADD_EVENTS, UPDATE_EVENTS, DELETE_EVENTS } from "../actions/types";

const initState = {
    events: [],
    event: {}
}

export default function reducer(state = initState, action) {
    switch (action.type) {
        case FETCH_EVENTS: {
            return { ...state, events: action.payload }
        }
        case ADD_EVENTS: {
            return {
                ...state,
                events: [...state.events, action.payload]
            }
        }
        case UPDATE_EVENTS: {
            return {
                ...state,
                events: state.events.map(event => {
                    if(event.EventId !== action.payload.EventId) {
                        return event
                    }
                    return action.payload
                })
            }
        }
        case DELETE_EVENTS: {
            return {
                ...state,
                events: state.events.filter(x => x.id !== action.payload)
            }
        }
        default: {
            return state;
        }
    }
}