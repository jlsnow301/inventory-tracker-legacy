const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const contactRoutes = require("./routes/contact");
const inventoryRoutes = require("./routes/inventory");
const itemsRoutes = require("./routes/items");
const usersRoutes = require("./routes/users");
const HttpError = require("./models/http-error");

const app = express();

// bodyparser middleware
app.use(bodyParser.json());

// Cross site request frogery
// this here... I Really LIke this!
// Wish Ed would have taught this!
const whiteList = ["http://localhost:3000"];

// +++++ comment this out to do testing through postman +++++
// +++++ you wont be able to test with postman if you dont +++++

const corsOptions = {
  origin: function (origin, callback) {
    if (whiteList.indexOf(origin) > -1) {
      callback(null, true);
    } else {
      callback(new Error("Blocked by cors"));
    }
  },
};

app.use(cors(corsOptions));

// DB config
// If you make your keys public one more time...
// THe config should be set up to export mongoURI
const db = require("./config/keys").mongoURI;

// Mongoose config
mongoose
  .connect(DB, { useNewUrlParser: true, useUnifiedTopology: true }) // connect to MongoDB
  .then(() => console.log("MongoDB Connected...")) // If successfull display this message
  .catch((err) => console.log(err)); // if not show error

// Header config
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// API Routes
app.use("/api/contact", require("./Routes/Contact"));
app.use("/api/inventory", require("./Routes/Inventory"));
app.use("/api/items", require("./Routes/Items"));
app.use("/api/users", require("./Routes/Users"));

// Catch Errors
app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error has occured." });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
