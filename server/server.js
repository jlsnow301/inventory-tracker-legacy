const EXPRESS = require('express');
const MONGOOSE = require('mongoose');
const BODYPARSER = require('body-parser');

const APP = EXPRESS();

// bodyparser middleware
APP.use(BODYPARSER.json());

// DB config
const DB = require('./config/keys').mongoURI;

// connect to mongo
MONGOOSE.connect(DB) // connect to MongoDB
  .then(() => console.log('MongoDB Connected...')) // If successfull display this message
  .catch((err) => console.log(err)); // if not show error

/**
 *  API ROUTES
 */

// members API routes
APP.use('/api/users', require('./Routes/Users/users'));
// Inventory routes
APP.use('/api/inventory', require('./Routes/API/Inventory'));

const port = process.env.PORT || 5000;
APP.listen(port, () => console.log(`Server started on port ${port}`));
