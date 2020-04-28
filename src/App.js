import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld'

class App extends Component {
  constructor() {
    super()

    this.state = {
      mountHelloWorld: false,
      helloWorldText: ''
    }
  }

  render () {
    const { mountHelloWorld, helloWorldText } = this.state

    return (
      <div className="App">
        <header>
          Unveiling React
        </header>
        <div className="actions">
          <button type="button" onClick={() => this.setState({mountHelloWorld: true})}>Mount Component</button>
          <button type="button" onClick={() => this.setState({mountHelloWorld: false})}>Unmount Component</button>
          <button type="button" onClick={() => this.setState({helloWorldText: new Date().toString()})}>Update Component</button>
        </div>
        <div className="text">
        {mountHelloWorld ? <HelloWorld text={helloWorldText}/> : null}
        </div>
      </div>
    );
  }
}

export default App;
