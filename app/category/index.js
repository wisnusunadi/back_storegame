var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = {
  serviceName : process.env.SERVICE_NAME,
  urlDb : process.env.MONGO_URL
}
