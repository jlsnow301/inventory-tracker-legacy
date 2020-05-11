# inventory-tracker

Web based inventory management system.

### after pulling things down from github

If your app needs you to reinstall dependencies heres what you should run for both client and server.

## For the Client

npm i reactstrap bootstrap @emotion/styled @emotion/core react-router-dom

[Emotion Styling Documentation](https://emotion.sh/docs/styled).
[Reactstrap Documentation](https://reactstrap.github.io/).
[React Routing Tutorial 26:33](https://www.youtube.com/watch?v=XRfD8xIOroA)
**watch this one at 1.5 or 2x speed**

## For the Server

npm i body-parser concurrently express mongoose 
npm i nodemon -D

NOTE: You will need to edit the **scripts** portion of your package.json in the server

It should look like this:
"scripts": {
"start": "node server.js",
"server": "nodemon server.js"
}

When developing and **_needing the server run this command:_**

**npm run server**
