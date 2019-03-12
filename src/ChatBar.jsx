import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Chatbar extends Component {
  constructor (props) {
    super(props);

    this.state = {
      username: (this.props.user.name) ? this.props.user.name : '',
      message: ''
    };

    this.nameChange = this.nameChange.bind(this);
    this.messageChange = this.messageChange.bind(this);
    this.enterMessage = this.enterMessage.bind(this);
    this.enterName = this.enterName.bind(this);
  }

  nameChange (e) {
    this.setState({username: e.target.value});
  }

  messageChange (e) {
    this.setState({message: e.target.value});
  }

  enterMessage (e) {
    if (e.key === 'Enter') {
      this.props.onEnter(this.state.message);
      this.setState({message: ''});
    }
  }

  enterName (e) {
    if (e.key === 'Enter') {
      this.props.onName(this.state.username);
    }
  }

  render () {
    return (
      <footer className="chatbar">
        <input className="chatbar-username"
        placeholder="Your Name (Optional)"
        value={this.state.username} onChange={this.nameChange} onKeyDown={this.enterName} />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER"
        value={this.state.message} onChange={this.messageChange} onKeyDown={this.enterMessage} />
      </footer>
    );
  }
}

export default Chatbar;

Chatbar.propTypes = {
  user: PropTypes.object,
  onEnter: PropTypes.func,
  onName: PropTypes.func
}