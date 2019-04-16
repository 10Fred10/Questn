const User = require('../models/user.model');
const bcrypt = require('bcrypt');


encryptPassword = pass => bcrypt.hashSync(pass, 10);

/********************* CREATE A USER *********************/
exports.createUser = function (req, res, next) {
         //hashing the entred password before saving it .
         let user = new User(req.body);
         user.password = encryptPassword(req.body.password);
         user.save(function (err) {
             if (err)  {
                 res.send("An Error occurred while handling your request, please verify your input");
                 return next(err);
             }
             res.send('User Created successfully')
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

    let tempUser = req.body; 
 
    if (req.body.password == undefined) { //Checks if the body contains a password
        User.findByIdAndUpdate(req.params.id, tempUser,
            function (err, user)
            { 
                if (err) {
                    res.send("An Error occurred while handling your request, please verify your input");
                    return next(err);
                }
                res.send('User udpated.');
            });

    }else {     //Encrypt the password before updating it
                tempUser.password = encryptPassword(req.body.password);
                User.findByIdAndUpdate(req.params.id, tempUser, function (err, user) {
                    if (err) {
                        res.send("An Error occurred while handling your request, please verify your input");
                        return next(err);
                    }
                    res.send('User udpated.');
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