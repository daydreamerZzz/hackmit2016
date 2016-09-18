var express = require('express');
// var ejs = require('ejs');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var api = require('./routes/api');
var account = require('./routes/account');
var list = require('./routes/list');
var hard_client = {};
hard_client["XSv5O9KD.html"] = require('./routes/XSv5O9KD');
hard_client["j8GNRHNj.html"] = require('./routes/j8GNRHNj');
hard_client["WUoz7A09.html"] = require('./routes/WUoz7A09');

var firebase = require('firebase');




var app = express();
app.use(express.static('public'));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/api', api);
app.use('/account', account);
app.use('/list', list);


app.use('/user/:id', function(req, res, next){
    console.log("id is: " + req.params.id);
    if (req.params.id==="WUoz7A09.html" || req.params.id==="XSv5O9KD.html" || req.params.id==="j8GNRHNj.html"){
	//or req.params.id
	//var data = '<h1>yoooooo</h1>';
	console.log(hard_client[req.params.id]);
	//app.use('/user/'+req.params.id, hard_client[req.params.id]);
	res.send('/user/'+req.params.id);
    }  else {
    var data = '<h1>hello world</h1>';
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(data);
    }
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error.html', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error.html', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
