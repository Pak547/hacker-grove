const express = require('express');
const connection = require('../connection');
const router = express.Router();
const jwt = require('jsonwebtoken');
require('dotenv').config();
const auth = require('../utils/auth');

// signing up will enter information into database
router.post('/signup', (req, res) => {
  // user information is taken from body
  const user = req.body;
  // query to check if user exists
  query = "SELECT email, password FROM user WHERE email =?"
  // checks email
  connection.query(query, [user.email], (results) => {
      try {
          if (results.length <= 0) {
              // all requirements for user database are required and inserted
              query = "insert into user (name, email, password) values(?,?,?)"
              connection.query(query, [user.name, user.contact_number, user.email, user.password], (err) => {
                  try {
                      return res.status(200).json({ message: "Successfully Registered!" });
                  } catch {
                      return res.status(500).json(err);
                  }
              })
          }
          else {
              return res.status(400).json({ message: "Email Already Exists" })
          }
      }
      catch (err) {
          return res.status(500).json(err);
      }
  })
});

// login will check if user exists and if user is verified
router.post('/login', (req, res) => {
  // user information is taken from body
  const user = req.body;
  // query to check if user exists
  query = "SELECT email, password, FROM user WHERE email =?";
  //  checks if user exists
  connection.query(query, [user.email], (err, results) => {
      try {
          // if user does not exist
          if (results.length <= 0 || results[0].password != user.password) {
              //  if user does not exist or password is invalid
              return res.status(401).json({ message: "Incorrect username or password" });
          }
          // if user exists and password is correct
          else if (results[0].status === 'false') {
              // if user is not verified
              return res.status(401).json({ message: "User not verified" });
          }
          // if user exists and password is correct and user is verified
          else if (results[0].password === user.password) {
              const response = { email: results[0].email, password: results[0].password };
              // token is created
              const accessToken = jwt.sign(response, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '8h' });
              // token is sent
              res.status(200).json({ token: accessToken });
          }
          else {
              return res.status(400).json({ message: "Something went wrong" })
          }
      }
      catch {
          return res.status(500).json(err);
      }
  })
});

router.get('/checkToken', auth.authenticateToken, (req, res) => {
  const token = req.headers.authorization.split('')[1];
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err) => {
      if (err) {
          return res.status(403).json({ message: "Invalid Token" });
      }
      else {
          return res.status(200).json({ message: "Valid Token" });
      }
  })
});