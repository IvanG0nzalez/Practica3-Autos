var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/api');
const cors = require('cors');

const inicializarRoles = require('./scripts/inicializarRoles');
const inicializarGerente = require('./scripts/inicializarGerente');

const corsOptions = {
  origin: 'http://web:3000',
  optionsSuccessStatus: 200
};

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors(corsOptions));

app.use('/', indexRouter);
app.use('/api', usersRouter);

//sync models
let models = require('./app/models');
models.sequelize.sync().then(async () =>{
  console.log('\x1b[33m%s\x1b[0m', "Se sincronizaron los modelos");
  await inicializarRoles();
  await inicializarGerente();
}).catch(err => {
  console.log(err,"ERROR!");
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
