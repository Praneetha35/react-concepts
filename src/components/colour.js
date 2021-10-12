//A program for getDerivedStateFromProps that will be called once the component gets updated and it skips the other methods after calling

import React, { Component } from 'react'
import ReactDOM from 'react-dom';

class Header extends Component {
    constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"};
    }
    static getDerivedStateFromProps(props, state) {
      return {favoritecolor: props.favcol };
    }
    changeColor = () => {
      this.setState({favoritecolor: "blue"});
    }
    render() {
      return (
        <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <button type="button" onClick={this.changeColor}>Change color</button>
        </div>
      );
    }
  }

  ReactDOM.render(<Header favcol="yellow"/>, document.getElementById('root'));

  export default Header