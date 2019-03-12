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
      // on connecting, do nothing but log it to the console
      this.setState({chatOn: true});
      // console.log('connected');
    };

    this.ws.onmessage = evt => {
      // console.log('received');
      // on receiving a message, add it to the list of messages
      const message = JSON.parse(evt.data)

      if (message.type === 'numberOnline') {
        this.setState({numUser: message.numUser});
      } else {
        const messages = this.state.messages.concat([message]);
        this.setState({messages});
      }
      // this.addMessage(message)
      // console.log(message);
    };

    this.ws.onclose = () => {
      this.setState({chatOn: false});
      // console.log('disconnected');
      // automatically try to reconnect on connection loss
      // this.setState({
      //   ws: new WebSocket(URL),
      // })
    };

    // setTimeout(() => {
    //   // Add a new message to the list of messages in the data store
    //   const newMessage = [{type: 'incomingMessage', username: 'Michelle', content: 'Hello there!'}];
    //   const messages = this.state.messages.concat(newMessage)
    //   // Update the state of the app component.
    //   // Calling setState will trigger a call to render() in App and all child components.
    //   this.setState({messages})
    // }, 3000);
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
