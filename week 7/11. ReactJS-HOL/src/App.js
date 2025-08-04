import React, { Component } from 'react';
import CurrencyConvertor from './CurrencyConvertor';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  sayHello = () => {
    console.log("Hello! Static message: Welcome to React Event Handling");
  };

 

  sayWelcome = (message) => {
    alert(`Message: ${message}`);
  };

  handleSynthetic = (e) => {
    e.preventDefault();
    alert("I was clicked");
  };

  render() {
    return (
      <div style={{ padding: "30px" }}>
        <h1>React Event Handling Examples</h1>
        <h2>Counter: {this.state.count}</h2>

        <button onClick={this.increment}>Increment</button>{' '}
        <button onClick={this.decrement}>Decrement</button>{' '}
       

        <hr />

        <button onClick={() => this.sayWelcome("Welcome")}>Say Welcome</button>

        <hr />

        <button onClick={this.handleSynthetic}>Click Me </button>

        <hr />

        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;