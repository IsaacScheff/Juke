const router = require('express').Router()
//const express = require('express');
//const app = express();
//const morgan = require('morgan');
// connect your API routes here!
//app.use(express.json());
//router.use(morgan('dev'));

router.use('/albums', require('./album'));

module.exports = router
