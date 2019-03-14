# ChattyApp

ChattyApp is a single page chatting web app, built using node, WebSockets, and React


## Final Product

!["The main page"](https://github.com/henryui/chattyApp/blob/master/docs/Chatty.png?raw=true)
*The main page*


### Dependencies - Frontend

- react
- react-dom
- prop-types

### DevDependencies - Frontend

- babel-core
- babel-loader
- babel-preset-es2015
- babel-preset-react
- css-loader
- node-sass
- sass-loader
- sockjs-client
- style-loader
- webpack
- webpack-dev-server


### Dependencies - Server

- express
- ws
- uuid


## Getting Started

### Local Deployment

1. Install all dependencies (using `npm install` command) from the project root and `chatty_server` directory.

2. Run the web server using the `node server.js` command from the `chatty_server` directory.

3. Run the webpack-dev-server using the `npm start` command from the project root directory.

7. Go to `http://localhost:3000/`


## Features

- Any number of users can join the chat.
  - The navbar shows number of users currently connected to the chat server.

- The users are given colours for their username in order of their server connection (blue -> red -> yellow -> green).

- Users can change their username by changing their name in the chatbar and press 'Enter'
  - Without pressing enter, it will not change their username
  - When changed, a system notification message will show up in the message list

- Users can enter a message in the chatbar and press 'Enter' to send messages to all the users
  - They can also send image URL as part of the message and the browser will render the image
  - If the URL is not a proper image, its address will show up as text
  - If the URL does not start with 'http' and not end with 'jpg', 'png', or 'gif', the URL will be a text


## Server-side

- Assigns color to each WebSocket clients

#### By Yunsung Oh
