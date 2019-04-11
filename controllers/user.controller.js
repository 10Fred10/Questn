const User = require('../models/user.model');
const bcrypt = require('bcrypt');

exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};


/* exports.cryptPassword = function(password, callback) {
   bcrypt.genSalt(10, function(err, salt) {
    if (err) 
      return callback(err);

    bcrypt.hash(password, salt, function(err, hash) {
      return callback(err, hash);
    });
  });
}; */

/* exports.comparePassword = function(plainPass, hashword, callback) {
   bcrypt.compare(plainPass, hashword, function(err, isPasswordMatch) {   
       return err == null ?
           callback(null, isPasswordMatch) :
           callback(err);
   });
};
 */
exports.createUser = function (req, res) {
    let user = new User(
        {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            birthDate: req.body.birthDate,
            gender: req.body.gender,
            //password: cryptPassword(req.body.password)
        }
    );

    console.log('hey ! ' + user);

    user.save(function (err) {
        if (err) {
            return next (err);
        }
        res.send('User Created successfully')
    })
};