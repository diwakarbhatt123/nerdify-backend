var express = require('express');
var router = express.Router();
var nerdifyService = require('../service/nerdifyService');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getTrendingPosts', function (req, res) {
    nerdifyService.getTrendingPosts(req, res);
});

/*Get Latest posts */
router.get('/getLatestPosts', function (req, res) {
    nerdifyService.getLatestPosts(req, res);
});

module.exports = router;
