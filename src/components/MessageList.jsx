import React, { Component, PropTypes } from 'React';
import Message from './Message.jsx';

class MessageList extends Component {
  constructor(props) {
    super(props);
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
          <Message key={count++} message={message}/>
        );
    });

    return (
        <div>{messageNodes}</div>
      );
  }
}

export default MessageList;