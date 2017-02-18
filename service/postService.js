var DBUtils = require('../db/DBUtils');
var _ = require('underscore');
var exports = {
    savePostInDb:function (req,res) {
        var post = req.body;
        if(_.isUndefined(post) || _.isEmpty(post)){
            res.status(400).json({error:'No Post data'});
        } else {
            DBUtils.savePost(post,function (err,post) {
               if(err){
                   console.log(err.stack,err.message);
                   res.status(500).json({error:'Internal Server Error could not save'});
               } else {
                   res.status(200).json(post);
               }
            });
        }
    }
};
module.exports = exports;