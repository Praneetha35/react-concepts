import React, { Component } from 'react'

class Class extends Component {
    render(){
        return <h1> Hi {this.props.name}. Grade : {this.props.grade}</h1>
    }
}

export default Class