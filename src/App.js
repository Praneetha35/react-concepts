import React, { Component } from 'react';
import './App.css';
import Func from './components/functional'
import Class from './components/class'
import Message from './components/message'
import Counter from './components/counter'
import Header from './components/colour'
import Example from './components/update'
import UseEffect from './components/customHooks/useEffect'
import UseEffect from './components/customHooks/test'
class App extends Component {
  render() {
    return (
      <div className = "App">
        <Func name = "Elon" grade = "O" >
          <button>Example</button>
        </Func>
        <Func name = "Mark" grade = "A" >
          <p> An example of child prop</p>
        </Func>
        <Func name = "Jim" grade = "B" />
        <Class name = "Elon" grade = "O" />
        <Message/>
        <Counter/>
        <Header/>
        <Example/>
        <UseEffect/>
      </div>
    );
  }
}
export default App;
