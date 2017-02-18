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
    }
};
module.exports = exports;