const express = require('express');
const connection = require('../connection');
const router = express.Router();
const jwt = require('jsonwebtoken');
// mails to the user if they forgot their password
require('dotenv').config();
const auth = require('../utils/auth');
