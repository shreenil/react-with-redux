import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

export class ParentComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         parentName: 'Parent'
      }
      this.clickHandler = this.clickHandler.bind(this);
    }
    
    clickHandler(childName) {
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }

  render() {
    return (
      <div>
        <ChildComponent handleClick={this.clickHandler}/>
      </div>
    )
  }
}

export default ParentComponent


