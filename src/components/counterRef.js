import React, { Component } from 'react'

class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }
    increment(){
    //     //calls to setState are asynchronous
    //     this.setState({
    //         count: this.state.count + 1
    //     },() => console.log('Callback value', this.state.count))
    //     //execute the code only after the state is updated
    //     console.log(this.state.count)
    // } 

    //Passing a function as an argument rather than the object itself
    this.setState((prevState) => ({
        count: prevState.count + 1
    }))
    
    console.log(this.state.count) }
    incrementThree(){
        this.increment()
        this.increment()
        this.increment()
    }
    render(){
        return (
            <div>
                <div>Count - {this.state.count}</div> 
                <button onClick = {() => this.incrementThree()}>Increment</button>
            </div>
        )
    }
}

export default Counter


