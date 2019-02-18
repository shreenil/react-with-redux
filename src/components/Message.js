import React, { Component } from "react";

export class Message extends Component {

    constructor() {
        super();
        this.state = {
            message: 'Welcome Visitor'
        }
    }

    changeState = () => {
        this.setState({
            message: 'Thank you for subscribing'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.changeState}>Subscribe</button>
            </div>
        )
    }

}