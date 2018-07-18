var express = require('express');
var app = express();
var router = express.Router();

var mysql = require('mysql');
var connection;

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'db_form'
});
connection.connect()

module.exports = connection;