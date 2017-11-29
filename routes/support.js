var express = require('express');
var router = express.Router();
var User = require('../models/user');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

router.get('/register',function(req,res){
    res.render('register');
});

router.post('/register',function(req,res){
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var email = req.body.email;
    var mobile = req.body.mobile;
    var password1 = req.body.password1;
    var password2 = req.body.password2;

    req.checkBody('firstName','First Name is required').notEmpty();
    req.checkBody('lastName','Last Name is required').notEmpty();
    req.checkBody('email','Email is required').isEmail();
    req.checkBody('mobile','Mobile is required').notEmpty();
    req.checkBody('password1','Password is required').notEmpty();
    req.checkBody('password2','Passwords dont match').equals(req.body.password1);
    var errors = req.validationErrors();

    if(errors){
        res.render('register',{errors:errors});
    }
    else{
        var newUser = new User({
            firstName : firstName,
            lastName : lastName,
            email : email,
            mobile : mobile,
            password : password1
        });
        User.createUser(newUser, function(err, user){
            if (err) throw err;
            console.log(user);
        });
        req.flash('success_msg',"registered");
        res.redirect('/support/login');
    }
});

router.get('/login',function(req,res){
    res.render('login');
});

passport.use(new LocalStrategy(function(email, password, done){
    User.getUserByEmail(email, function(err, user){
        if(err) throw err;
        if(!user){
            return done(null, false, {message: "Unknown user"});
        }
        User.comparePassword(password, user.password, function(err, isMatch){
            if(err) throw err;
            if(isMatch){
                return done(null, user);
            } else{
                return done(null, false, {message: 'invalid password'});
            }
        });
    });
}));

passport.serializeUser(function(user, done){
    done(null, user.id);
});

passport.deserializeUser(function(id, done){
    User.getUserById(id, function(err, user){
        done(err, user);
    });
});

router.post('/login',passport.authenticate('local',{failureRedirect:'/support/login',failureFlash: true}),function(req, res){
    res.redirect('/');
});

router.get('/logout',function(req, res){
    req.logout();
    req.flash('success_msg', 'Logged out!');
    res.redirect('/support/login');
});

module.exports=router;