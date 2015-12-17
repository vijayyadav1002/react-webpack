import React, { Component, PropTypes } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      messages: [
        'hi there!! Good Morning',
        'I am good and you?'
      ]
    };
  }

  render() {
    var count=0;
    var messageNodes = this.state.messages.map((message) => {
      return (
          <div style={{color:"green"}} key={count++}>{message}</div>
        );
    });

    return (
        <div>{messageNodes}</div>
      );
  }
}

export default App;