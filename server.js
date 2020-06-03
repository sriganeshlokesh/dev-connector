const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
const db = require("./config/keys").MONGOURI;
const passport = require("passport");

// Body Parsor Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
const user = require("./routes/api/users"); // /api/users
const profile = require("./routes/api/profile"); // /api/profile
const post = require("./routes/api/post"); // /api/post

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Passport Middleware
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);

// Use Routes
app.use("/api/user", user);
app.use("/api/profile", profile);
app.use("/api/post", post);

app.listen(PORT, () => {
  console.log(`Server Running on Port: ${PORT}`);
});
