const router = require('express').Router();
const Tracking = require('../../models/Tracking');
const withAuth = require('../../utils/auth');


// GET all trackings for a user
