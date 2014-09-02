'use strict';

module.exports = function(user, cb){
  var obj = {userId:user._id};
  cb(null, obj); //this is the obj var from line above. you could shorten it to cb(null, {userId:user._id});
};
