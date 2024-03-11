// routes/auth.js

const express = require('express');
const passport = require('passport');
const router = express.Router();
const User = require('../models/user');

// Render registration form
router.get('/register', (req, res) => {
  res.render('register');
});

// Handle registration form submission
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = new User({ username, email });
    await User.register(newUser, password);
    passport.authenticate('local')(req, res, () => {
      res.redirect('/friends');
    });
  } catch (error) {
    console.log(error);
    res.redirect('/register'); // Redirect to registration page on error
  }
});

// Render login form
router.get('/login', (req, res) => {
  res.render('login');
});

// Handle login form submission
router.post('/login', passport.authenticate('local', {
  successRedirect: '/friends',
  failureRedirect: '/login',
}), (req, res) => {});

// Logout route
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

// Middleware to check if user is logged in
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

module.exports = router;
