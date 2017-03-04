/**
 * Created by diwakar on 04/03/17.
 */
var DBUtils = require('../db/DBUtils');
var _ = require('underscore');
var exports = {
    getTrendingPosts: function (req, res) {
        DBUtils.getTrendingPosts(function (err, post) {
            if (err) {
                res.status(500).json({error: 'Internal Server Error: Could not get post'});
            } else {
                res.status(200).json(post);
            }
        });

    },
    getLatestPosts: function (req, res) {
        DBUtils.getLatestPosts(function (err, post) {
            if (err) {
                res.status(500).json({error: 'Internal Server Error: Could not get post'});
            } else {
                res.status(200).json(post);
            }
        });
    }

};
module.exports = exports;