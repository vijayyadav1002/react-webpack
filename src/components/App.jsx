import React, { Component, PropTypes } from 'react';
import MessageList from './MessageList.jsx';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
        <MessageList/>
      )
  }
}

export default App;