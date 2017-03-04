var express = require('express');
var router = express.Router();
var postService = require('../service/postService');

/* GET posts listing. */
router.get('/:postId', function (req, res, next) {
    postService.getPost(req, res);
});
/*Post a post :p*/
router.post('/', function (req, res) {
    postService.savePostInDb(req, res);
});
/*Like a post (y)*/
router.put('/like', function (req, res) {
    postService.likePost(req, res);
});
/*Post a comment {}*/
router.put('/comment', function (req, res) {
    postService.addCommentToPost(req, res);
});

module.exports = router;
