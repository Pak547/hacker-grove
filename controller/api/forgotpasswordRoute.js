const router = require('express').Router();
require('dotenv').config();
const nodemailer = require('nodemailer');
const { User } = require('../../models');

// syntax for nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_HOST,
    pass: process.env.EMAIL_HOST_PASSWORD
  }
});
// forgot password will send password to user email if user exists in database 
router.post('/forgotpassword', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Error' });
      return;
    }
    else {
      const mailOptions = {
        from: process.env.EMAIL_HOST,
        to: req.body.email,
        subject: 'Password Reset',
        text: 'Your email is' + req.body.email + 'Your password is ' + req.body.password
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
  } catch (err) {
    return res.status(500).json(err);
  }
}
);

module.exports = router;