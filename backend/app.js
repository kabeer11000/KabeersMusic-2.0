var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
var jwt = require('jsonwebtoken');
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 10 minutes 20 request
  max: 100 // limit each IP to 100 requests per windowMs TODO Default 10
});
const mongo_uri = require('./keys/mongokey');


var authRouter = require('./routes/AuthRouter');
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
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(session({
  secret: '5s323720194bccb1cb94164a13E144994E3E17F9B',
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({
    url: mongo_uri
  })
}));
app.use('/proxy', ProxyRouter);
app.use('/api', songsRouter);
app.use('/auth', authRouter);

app.use('/files/yt-fake/sample-response-master/yt-api/suggested-cardib.json', (req, res) => {
  if (req.headers.authorization) {
    jwt.verify(req.headers.authorization.split(' ')[1], 'd546fd8RiOe5kf4tiNTv1S4VGhCA', function (err, decoded) {
      if (err) return res.status(400).json(err);
      return res.status(200).sendFile(path.join(__dirname, '/public/files/yt-fake/sample-response-master/yt-api/suggested-cardib.json'));
    })
  }
});
app.use(express.static(path.join(__dirname, 'public')));
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
