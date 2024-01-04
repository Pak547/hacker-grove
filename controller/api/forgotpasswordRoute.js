const express = require('express');
const connection = require('../connection');
const router = express.Router();
require('dotenv').config();

// syntax for nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD
  }
});
// forgot password will send password to user email if user exists in database 
router.post('/forgotpassword', (req, res) => {
  const user = req.body;
  query = "select email, password from user where email =?";
  connection.query(query, [user.email], (err, results) => {
      if (!err) {
          if (results.length <= 0) {
              return res.status(200).json({ message: "Password sent to email" });
          }
          else {
              // email information is taken from body and sent to user email
              const mailOptions = {
                  from: process.env.EMAIL,
                  to: results[0].email,
                  subject: 'Password Reset',
                  text: 'Your email is' + results[0].email + 'Your password is ' + results[0].password
              };
              // send email to user with password information  
              transporter.sendMail(mailOptions, function (error, info) {
                  if (error) {
                      console.log(error)
                  }
                  else {
                      console.log('Email sent: ' + info.response);
                  }
              });
              return res.status(200).json({ message: "Password sent to email" });
          }
      }
      else {
          return res.status(500).json(err);
      }
  })
});