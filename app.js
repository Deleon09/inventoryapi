var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
const cors = require("cors");

//Router importing
var SupplierRouter = require('./routes/SupplierRouter');
var UserRouter = require('./routes/UserRouter');
var ProductRouter = require('./routes/ProductRouter');
var ProductCollectionRouter = require('./routes/ProductCollectionRouter');
var CustomerRouter = require('./routes/CustomerRouter');
var DepartureRouter = require('./routes/DepartureRouter');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Connection to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true
})
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    debug(err);
    process.exit(1);
  });

// Using the routes
app.use('/supplier', SupplierRouter);
app.use('/user', UserRouter);
app.use('/product', ProductRouter);
app.use('/productCollection', ProductCollectionRouter);
app.use('/customer', CustomerRouter);
app.use('/departure', DepartureRouter);

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
