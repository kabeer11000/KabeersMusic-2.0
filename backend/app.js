var createError = require('http-errors');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require("cors");
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 10 minutes 20 request
  max: 100 // limit each IP to 100 requests per windowMs TODO Default 10
});


var indexRouter = require('./routes/index');
var ProxyRouter = require('./routes/ProxyRouter');
var songsRouter = require('./routes/SongsAPI');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use('/api/', limiter);
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser());

app.use('/proxy', ProxyRouter);
app.use('/api', songsRouter);

app.use(express.static(path.join(__dirname, 'public/build')));
app.get(['/', '/home', '/downloads', '/liked', '/history'], (req, res) => {
  res.sendFile(path.join(__dirname, 'public/build', 'index.html'));
});


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
