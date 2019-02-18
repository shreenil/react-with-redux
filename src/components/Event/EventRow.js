import React from 'react'

function EventRow({ event, editButtonHandler, deleteButtonHandler }) {
  return (
    <tr>
      <td>{event.EventTitle}</td>
      <td>{event.CreatedBy}</td> 
      <td>{new Date(event.EventDate).toLocaleString()}</td>
      <td>{event.Venue}</td>
      <td>
        <button onClick={() => editButtonHandler(event)} className="btn btn-primary">
          <span className="glyphicon glyphicon-pencil"></span>
        </button> &nbsp;
          
          <button onClick={() => deleteButtonHandler(event)} className="btn btn-danger">
            <span className="glyphicon glyphicon-trash"></span>
          </button>
      </td>
    </tr>
  )
}

export default EventRow
