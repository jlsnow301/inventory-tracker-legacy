const EXPRESS = require('express');
const MONGOOSE = require('mongoose');
const BODYPARSER = require('body-parser');
const CORS = require('cors');

const APP = EXPRESS();

// bodyparser middleware
APP.use(BODYPARSER.json());

// Cross site request frogery
const whiteList = ['http://localhost:3000'];
const corsOptions = {
  origin: function(origin, callback) {
    if (whiteList.indexOf(origin) > -1) {
      callback(null, true);
    } else {
      callback(new Error('Blocked by cors'));
    }
  }
}

APP.use(CORS(corsOptions));

// DB config
//const DB = require('./config/keys').mongoURI;
const DB = 'mongodb+srv://margarita_yatina:Student@pharmabase-efgpy.mongodb.net/test'


// connect to mongo
MONGOOSE.connect(DB, {useNewUrlParser: true}) // connect to MongoDB
  .then(() => console.log('MongoDB Connected...')) // If successfull display this message
  .catch((err) => console.log(err)); // if not show error

/**
 *  API ROUTES
 */

// members API routes
APP.use('/api/users', require('./Routes/Users/users'));
// Inventory routes
APP.use('/api/inventory', require('./Routes/API/Inventory'));
// Items routes
APP.use('/api/items', require('./Routes/API/Iems'));

const port = process.env.PORT || 5000;
APP.listen(port, () => console.log(`Server started on port ${port}`));
