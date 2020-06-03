const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// @route GET /api/user/test
// @desc Tests user route
// @access Public
router.get("/test", (req, res) => {
  res.json({ msg: "Success" });
});

// @route GET /api/user/register
// @desc Register user route
// @access Public
router.post("/register", (req, res) => {
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({ email: "Email Already Registered" });
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: "200",
        r: "pg",
        d: "mm",
      });
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar: avatar,
        password: req.body.password,
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => {
              res.json(user);
            })
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

// @route GET /api/user/login
// @desc Login user route - Returning JWT Token
// @access Public
router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  // Find the user by email
  User.findOne({ email }).then((user) => {
    // Check for user
    if (!user) {
      return res.status(404).json({ email: "User Not Found" });
    } else {
      // Check Password
      bcrypt.compare(password, user.password).then((isMatch) => {
        if (isMatch) {
          // User Found
          const payload = {
            id: user._id,
            name: user.name,
            avatar: user.avatar,
          }; // Create JWT Payload
          // Sign Token
          jwt.sign(payload, keys.SECRET, { expiresIn: 3600 }, (err, token) => {
            res.json({ success: true, token: "Bearer " + token });
          });
        } else {
          return res.status(400).json({ password: "Incorrect Password" });
        }
      });
    }
  });
});

// @route GET /api/user/current
// @desc Return current user
// @access Private
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user._id,
      name: req.user.name,
      email: req.user.email,
    });
  }
);

module.exports = router;
