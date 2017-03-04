var mongooseModel = require('./mongoosemodel');
var _ = require('underscore');
var exports = {
    savePost: function (post, cb) {
        if (_.isUndefined(this.Post)) {
            this.Post = mongooseModel.Post();
        }
        var newPost = new this.Post(post);
        newPost.save(function (err, post) {
            if (err) {
                cb(err, null);
            } else {
                cb(null, post);
            }
        });
    },
    getPostById: function (postId, cb) {
        if (_.isUndefined(this.Post)) {
            this.Post = mongooseModel.Post();
        }
      this.Post.findOne({_id:postId},function (err,post) {
          if (err) {
              cb(err, null);
          } else {
              cb(null, post);
          }
      });
    },
    likePost: function (postId, cb) {
        if (_.isUndefined(this.Post)) {
            this.Post = mongooseModel.Post();
        }
        this.Post.findOneAndUpdate({_id:postId},{$inc:{likes:1},$set:{updatedOn:new Date()}},{new:true},function (err,post) {
            if (err) {
                cb(err, null);
            } else {
                cb(null, post);
            }
        });
    },
    addCommentToPost:function (postId,comment,cb) {
        if (_.isUndefined(this.Post)) {
            this.Post = mongooseModel.Post();
        }
        this.Post.findOneAndUpdate({_id:postId},{$push:{comments:comment},$set:{updatedOn:new Date()}},{new:true},function (err,post) {
            if (err) {
                cb(err, null);
            } else {
                cb(null, post);
            }
        });
    }
};
module.exports = exports;