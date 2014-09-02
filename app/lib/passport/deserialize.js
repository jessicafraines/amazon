'use strict';

var User = require('../../models/user');


module.exports = function(obj, cb){  //obj is the obj from serialize
  User.findById(obj.userId, cb); //this cb is err, user
};

