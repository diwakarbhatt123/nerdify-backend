var express = require('express');
var router = express.Router();
var postService = require('../service/postService');

/* GET posts listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});
/*Post a post :p*/
router.post('/',function (req, res) {
    postService.savePostInDb(req,res);
});

module.exports = router;