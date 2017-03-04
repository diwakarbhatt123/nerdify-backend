var DBUtils = require('../db/DBUtils');
var _ = require('underscore');
var exports = {
    getPost:function (req,res) {
        if (_.isUndefined(req.params) || _.isEmpty(req.params)) {
            res.status(400).json({error: 'No Post Id'});
        } else {
            var postId = req.params.postId;
            if (_.isUndefined(postId) || _.isEmpty(postId)) {
                res.send(400).json({error: 'Post id not found in request'});
            } else {
                DBUtils.getPostById(postId, function (err, post) {
                    if (err) {
                        res.status(500).json({error: 'Internal Server Error could not like'});
                    } else {
                        res.status(200).json(post);
                    }
                });
            }
        }
    },
    savePostInDb: function (req, res) {
        var post = req.body;
        if (_.isUndefined(post) || _.isEmpty(post)) {
            res.status(400).json({error: 'No Post data'});
        } else {
            DBUtils.savePost(post, function (err, post) {
                if (err) {
                    console.log(err.stack, err.message);
                    res.status(500).json({error: 'Internal Server Error could not save'});
                } else {
                    res.status(200).json(post);
                }
            });
        }
    },
    likePost: function (req, res) {
        if (_.isUndefined(req.body) || _.isEmpty(req.body)) {
            res.status(400).json({error: 'No Post Id'});
        } else {
            var postId = req.body.id;
            if (_.isUndefined(postId) || _.isEmpty(postId)) {
                res.send(400).json({error: 'Post id not found in request'});
            } else {
                DBUtils.likePost(postId, function (err, post) {
                    if (err) {
                        res.status(500).json({error: 'Internal Server Error could not like'});
                    } else {
                        res.status(200).json({postId: post._id, likes: post.likes});
                    }
                });
            }
        }
    },
    addCommentToPost: function (req,res) {
        if (_.isUndefined(req.body) || _.isEmpty(req.body)) {
            res.status(400).json({error: 'No Post Id and comment'});
        } else {
            var postId = req.body.id;
            var comment = req.body.comment;
            if (_.isUndefined(postId) || _.isEmpty(postId) || _.isUndefined(comment) || _.isEmpty(comment)) {
                res.status(400).json({error:'No postId or comment body'});
            } else {
                DBUtils.addCommentToPost(postId,comment,function (err,post) {
                   if(err){
                       console.log(err);
                       res.status(500).json({error:'Internal server error could not add comment'});
                   } else {
                       res.status(200).json({postId:post._id,comments:post.comments});
                   }
                });
            }
        }
    }
};
module.exports = exports;