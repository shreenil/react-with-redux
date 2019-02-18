import React from 'react'

export default function ChildComponent(props) {
  return (
    <div>
      <button onClick={() => props.handleClick('child')} >Click me</button>
    </div>
  )
}
