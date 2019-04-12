const User = require('../models/user.model');
const bcrypt = require('bcrypt');

/********************* CREATE A USER *********************/
exports.createUser = function (req, res, next) {

        //hashing the entred password before saving it .
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(req.body.password, salt, function(err, hash) {               
                let user = new User(
                    {
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        email: req.body.email,
                        birthDate: req.body.birthDate,
                        gender: req.body.gender,
                        password: hash
                        }
                );
                user.save(function (err) {
                    if (err)  {
                        res.send("An Error occurred while handling your request, please verify your input");
                        return next(err);
                    }
                    res.send('User Created successfully')
                });
            });
        });
};

/********************* READ A USER'S DETAILS BY ID *********************/
exports.readUser = function (req, res, next) {
    User.findById(req.params.id, function (err, user) {
        if (err)  {
            res.send("An Error occurred while handling your request, please verify your input");
            return next(err);
        }
        res.send(user);
    })
}

/********************* UPDATE A USER BY ID *********************/
exports.updateUser = function (req,res,next) {

    //Checks if the update contains a password
    if (req.body.password == undefined) {

        //Directly update the user's details
        User.findByIdAndUpdate(req.params.id, {$set : req.body },function (err, user) { 
            if (err)   {
                res.send("An Error occurred while handling your request, please verify your input");
                return next(err);
            }
            res.send('User udpated.');
        });
    }else { //Encrypt the password before updating it
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(req.body.password, salt, function(err, hash) {               
                let tempUser = {$set : req.body} //Temporary user to hold entered details
                tempUser.password = hash; //Update the password with the hash
                User.findByIdAndUpdate(req.params.id, tempUser, function (err, user) {
                    if (err) {
                        res.send("An Error occurred while handling your request, please verify your input");
                        return next(err);
                    }
                    res.send('User udpated.');
                });
            });
        });
    }
    
}

/********************* DELETE A USER BY ID *********************/
exports.deleteUser = function (req, res, next) {
    User.findByIdAndDelete(req.params.id, function (err) {
        if(err) {
            res.send("An Error occurred while handling your request, please verify your input");
            return next(err);
        }
        res.send("user deleted successfully! ");
    })
}