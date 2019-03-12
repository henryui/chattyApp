import React, { Component } from 'react';
import Message from './Message.jsx';
import PropTypes from 'prop-types';

class MessageList extends Component {
  render () {
    const list = this.props.messages.map((m) => {
      return (<Message message={m} key={m.id} />);
    });

    return (
      <main className="messages">
        {list}
      </main>
    );
  }
}

export default MessageList;

MessageList.propTypes = {
  messages: PropTypes.array
};