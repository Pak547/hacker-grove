const express = require('express');
const connection = require('../connection');
const router = express.Router();
require('dotenv').config();

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