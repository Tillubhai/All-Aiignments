// app.js

const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("./models/user");
const authRoutes = require("./routes/auth");
const indexRoutes = require("./routes/index");

const app = express();

// Connect to MongoDB
mongoose.connect("mongodb://localhost/connectify");

// Set up sessions
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);

// Initialize Passport and session
app.use(passport.initialize());
app.use(passport.session());

// Passport local strategy
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Middleware for passing user to all views
app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});

// Set up routes
app.use("/", indexRoutes);
app.use("/auth", authRoutes);

// Start the server
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
