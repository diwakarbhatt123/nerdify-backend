var mongoose = require('mongoose');
var exports = {
    postsSchema: function () {
        return new mongoose.Schema({
            title: String,
            post: String,
            createdOn: Date,
            updatedOn: Date,
            likes: Number,
            comments: [{
                name: String,
                email: String,
                comment: String,
                commentedOn: Date
            }]
        });
    },
    Post:function () {
        var post = this.postsSchema();
        post.pre('save', function(next) {
            // get the current date
            var currentDate = new Date();
            // change the updated_at field to current date
            this.updatedOn = currentDate;
            // if created_at doesn't exist, add to that field
            this.createdOn = currentDate;
            next();
        });
        return mongoose.model('Post',post);
    }
};
module.exports = exports;