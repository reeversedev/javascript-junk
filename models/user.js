var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var UserSchema = mongoose.Schema({
    firstName : {
        type: String
    },
    lastName : {
        type: String
    },
    email : {
        type: String,
        index : true
    },
    mobile : {
        type: Number
    },
    password : {
        type: String
    },


    userType: { type: Number, default: 2 }
});

var User = module.exports = mongoose.model('User', UserSchema);

module.exports.createUser = function(newUser, callback){
    bcrypt.genSalt(10,function(err,salt){
        bcrypt.hash(newUser.password, salt, function(err,hash){
            newUser.password = hash;
            newUser.save(callback);
        })
    })
}

module.exports.getUserByEmail = function(email, callback){
    var query = {email: email};
    User.findOne(query, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, function(err, isMatch){
        if(err) throw err;
        callback(null, isMatch);
    })
}

module.exports.getUserById = function(id, callback){
    User.findById(id, callback);
}