import React, { Component } from 'react';
import './App.css';

class App extends Component {
state = {
  text: ''
}

handleChange = (event) => {
  this.setState({
    text: event.target.value
  })
}

  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" 
               placeholder="Empieza a escribir algo" 
               onChange={this.handleChange} />
        <p className="repeater">{this.state.text}</p>
      </div>
    );
  }
}

export default App;
