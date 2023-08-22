// var createError = require('http-errors');
import  'dotenv/config.js';
import __dirname from './utils.js';
import createError from 'http-errors';

import express  from 'express';
// var express = require('express');
import path from 'path';
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
import logger from 'morgan';
import indexRouter from './routes/index.js';
import notFoundHandler from './middlewares/notFoundHandler.js'
import errorHandler from './middlewares/errorHandler.js'
import cors from 'cors'

// 
// import usersRouter from './routes/users.js';
// var usersRouter = require('./routes/users');


let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);



app.use(notFoundHandler);

// error handler
app.use(errorHandler);


// module.exports = app;
export default app
