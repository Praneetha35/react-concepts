import React, { Component } from 'react'

class Message extends Component {

    constructor() {
        //Extend react's component class and a call is to made to the base class constructor
        //super() will calls the constructor of its parent class. This is required when you need to access some variables from the parent class.
        super()
        this.state = {
            message: "Hi User"
        }
    }

    changeMessage(){
        this.setState({
            message: ' Thank you for subscribing'
        })
    }
    render() {
        return (
            //Using div tag because only one element is returned
            <div>
                <h1> {this.state.message}</h1>
                <button onClick = { () => this.changeMessage()}>Subscribe</button>
            </div>

        )
    }
}

export default Message