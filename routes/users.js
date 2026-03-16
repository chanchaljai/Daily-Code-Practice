var express = require('express');
var router = express.Router();

<<<<<<< HEAD
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
=======



const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/meradb");
const userschema = mongoose.Schema({
  username: String,
  name: String,
  age: Number
});

module.exports = mongoose.model("user", userschema);


>>>>>>> f64fd72 (session and cookies in express generator)
