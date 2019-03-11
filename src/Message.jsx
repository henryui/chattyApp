import React, { Component } from 'react';

const MessageList = function ({message}) {
  return (
    <div className="message">
      <span className="message-username">{message.username}</span>
      <span className="message-content">{message.content}</span>
    </div>
  );
}

const NotiList = function ({noti}) {
  return (
    <div className="message system">
      {noti.content}
    </div>
  );
}

class Messages extends Component {
  render () {
    const list = this.props.messages.map((m) => {
      if (m.type === 'incomingMessage') {
        return (<MessageList message={m} />);
      } else {
        return (<NotiList noti={m} />);
      }
    });

    return (
      <main className="messages">
        {list}
      </main>
    );
  }
}

export default Messages;