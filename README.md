# ChattyApp

ChattyApp is a single page chatting web app, built using node, WebSockets, and React


## Final Product

!["The main page"](https://github.com/henryui/Cucubook/blob/master/docs/cucubook1.png?raw=true)
*The main page*


## Dependencies

- express
- node 5.10.x or above
- bodyParser
- chance
- md5
- mongodb
- bcrypt
- cookie-session
- dotenv
- save
- path


## Getting Started

### Local Deployment

1. Install all dependencies (using `npm install` command).

2. Install MongoDB driver suited to your OS.

3. Run the mongo local server using `mongod` or `sudo mongod`

4. Create `.env` file with variables:

```
MONGODB_URI=mongodb://localhost:27017/
COOKIE_KEY1=key1
COOKIE_KEY2=key2
PORT=8080
```

MONGODB_URI should be the URI of your local DB, cookie keys can be any (relatively-short) string, and port should be any available port from your local machine

5. If this is your initial deployment, it is recommended that from `server/index.js` file, uncomment `seedDB();` which is on line 28. This function will seed the initial data into your database.

*It was not tested without initializing the data using seedDB*

After the first deployment, comment out the `seedDB();` from the file.

6. Run the development web server using the `node server/index.js` command.

7. Go to `http://localhost:8080/`


### Access the website using heroku

The link to the Cucubook:

[https://cucubook.herokuapp.com/](https://cucubook.herokuapp.com/)


## Features

- Note that as a mobile first development, styling of the web app is better suited to browsers in mobile phones

- Navbar has a user button, brand logo and name, and a write button
  - Clicking user button will gray out the main page and a side bar will slide in
  - Clicking the user button again or clicking the grayed out area will clear the side bar away
  - The side bar has login/register form if not logged in
  - The side bar has user information panel when signed in
    - User info panel has a form to update profile picture

- Compose new post form is hidden on load, it is dislayed on top of the list of all posts
  - The write button is clicked to show or hide the form
  - Character counter is implemented to show remaining/exceeding character limit
  - Only accessible when signed in
  - Displays error message when no text input is being submitted, or text is over 140 characters
  - Upon page refresh or clicking compose button, form text and error message is cleared

- LogIn and Register forms:
  - Name of the user is limited to 30 characters, and handle/ID is limited to 20
  - Registering randomly assigns an avatar for every user
  - LogIn: Displays error message when non-existing userID or incorrect password is submitted
    - Purposely displaying single message for both cases to protect privacy
  - Register: Displays error message when userID is already taken
    - Same Names are allowed
  - Upon page refresh, clearing the sidebar, or submitting the correct form, input text and error message is cleared

- Posts are displayed in order of newest to oldest
  - In the header, avatar image, full name, and user handle/ID is displayed
  - Content is displayed in the body
  - Footer contains the time stamp, showing in seconds/minutes/hours/days or date respectively
  - Footer also has flag, retweet, like buttons, which is shown when the tweet is hovered
    - Like button can only be clicked when logged in, and it will turn red, showing like count
    - User's own tweet cannot be liked

- Comments can be posted using a comment form
  - The form and the list of comments are toggled using the comment button on the post

- User's own post and comments can be deleted

- The page is (almost fully) responsive depending on screen size


## Server-side

- Every request is called from front-end javascript using AJAX
- `/tweets/` , `/users/` , `/comments/` routes are handled separately in their files
- User Password and sessions are encrypted


#### By Yunsung Oh
