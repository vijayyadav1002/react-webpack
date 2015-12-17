import React, { Component, PropTypes } from 'React';

class Message extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div style={{color:"green"}} >{this.props.message}</div>
      )
  }
}


export default Message;