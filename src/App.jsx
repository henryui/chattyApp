import React, {Component} from 'react';
import Navbar from './NavBar.jsx'
import MessageList from './MessageList.jsx'
import Chatbar from './ChatBar.jsx'

const URL = 'ws://0.0.0.0:3001'

class App extends Component {
  constructor () {
    super();

    this.state = {
      currentUser: {name: null},
      messages: [],
      chatOn: false,
      numUser: 0
    }

    this.ws = new WebSocket(URL);

    this.submitNewMessage = this.submitNewMessage.bind(this);
    this.submitNewName = this.submitNewName.bind(this);
  }

  submitNewMessage (content) {
    const username = (this.state.currentUser.name) ? this.state.currentUser.name : 'anonymous';
    const newMessage = JSON.stringify({type: 'postMessage', username, content});
    if (this.state.chatOn) {
      this.ws.send(newMessage);
    }
  }

  submitNewName (name) {
    const username = (name) ? name : null;
    const oldname = this.state.currentUser.name;
    if (username !== oldname) {
      this.setState({currentUser: {name: username}});
      if (this.state.chatOn) {
        const content = (oldname ? oldname : 'anonymous') + ' changed their name to ' + (username ? username : 'anonymous') + '.';
        this.ws.send(JSON.stringify({type: 'postNotification', content}));
      }
    }
  }

  componentDidMount() {
    this.ws.onopen = () => {
      this.setState({chatOn: true});
    };

    this.ws.onmessage = evt => {
      // on receiving a message, add it to the list of messages
      const message = JSON.parse(evt.data)

      if (message.type === 'numberOnline') {
        this.setState({numUser: message.numUser});
      } else {
        const messages = this.state.messages.concat([message]);
        this.setState({messages});
      }
    };

    this.ws.onclose = () => {
      this.setState({chatOn: false});
    };
  }

  render() {
    return (
      <div>
        <Navbar numUser={this.state.numUser} />
        <MessageList messages={this.state.messages} />
        <Chatbar user={this.state.currentUser} onEnter={this.submitNewMessage} onName={this.submitNewName} />
      </div>
    );
  }
}
export default App;
