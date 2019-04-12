const User = require('../models/user.model');
const bcrypt = require('bcrypt');

exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.createUser = function (req, res) {

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
                    if (err) {
                        return next (err);
                    }
                    res.send('User Created successfully')
                });
            });
        });
};

exports.userDetails = function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) return next(err);
        res.send(user);
    })
}