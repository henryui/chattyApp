import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Message extends Component {
  render () {
    let text = this.props.message.content;
    const imageStart = text.search('http');
    const EndArray = [text.search('jpg'), text.search('png'), text.search('gif')].filter(x => x !== -1);
    const imageEnd = (EndArray.length) ? Math.min.apply(null, EndArray) : -1;
    if (imageStart !== -1 && imageEnd !== -1 && imageStart < imageEnd) {
      const imageString = text.slice(imageStart, imageEnd + 3);
      text = (<div>{text.slice(0, imageStart)} <img className="message-image" src={imageString} alt={imageString} /> {text.slice(imageEnd + 3)}</div>);
    }

    const messageObj = (this.props.message.type === 'incomingMessage') ?
    (<div className="message">
      <span className="message-username" style={{color: this.props.message.color}}>{this.props.message.username}</span>
      <span className="message-content">{text}</span>
    </div>) :
    (<div className="message system">
      {this.props.message.content}
    </div>);

    return messageObj;
  }
}

Message.propTypes = {
  message: PropTypes.object
};

export default Message;