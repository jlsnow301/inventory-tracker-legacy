/**
 * server/routes/inventories/invetory.js
 *
 * @routes /api/contact
 * post / Sends email
 *
 * @todos finish
 *
 * @issues
 *
 */

const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const EMAIL = require('../../config/keys').sendGridURI;
const SGMAIL = require('@sendgrid/mail');
/**
 * @purpose Handles Activity for the contact form! YAY CONTACT!
 * @complete --> NO
 * @working no
 *
 * @todos Connect to Form
 * @todos Build email sending capablity with NPM dependency sendgrid/mail
 *
 * @notes
 *  uses dependency sendgrid/mail, see readme.md for link to documentation
 */

// This
// Anthony
// Message
ROUTER.post('/', (req, res) => {
  SGMAIL.setApiKey(EMAIL);
  console.log(req.body);
  /* const msg = {
    To: 'stenbergdigeronimo@gmail.com',
    From: req.body.email,
    Subject: 'Inventory Contact testing',
    Text:
      req.body.firstname +
      ' ' +
      req.body.lastname +
      ' says ' +
      req.body.message,
  };*/
  const msg = {
    to: 'test@example.com',
    from: 'test@example.com',
    subject: 'Sending with Twilio SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };
  SGMAIL.send(msg)
    .then((result) => {
      res.status(200).json({
        success: true,
      });
    })
    .catch((error) => {
      console.log('errors: ' + error);
      res.status(401).json({
        success: false,
      });
    });
});

// Enter no text below this point

module.exports = ROUTER;
