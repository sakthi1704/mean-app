var express = require('express');
var db = require('../db/db')
// var router = express.Router();
var cors = require('cors')
var app = express()

app.use(cors())
var bodyParser = require('body-parser');

var connection;
connection = db;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
app.get('/user', function(req, res, next) {
  connection.query('SELECT * from t_user_reg', function(err, rows, fields) {

      if (!err)
        console.log('The solution is: ', rows);
      else
        console.log('Error while performing Query.');
      });
    
  res.render('index', { title: 'hii' });
});

module.exports = app;

