const User = require("../models/user.model");
const bcrypt = require("bcrypt");

// Load input validation
const validateRegisterInput = require("../validation/register.validator");
const validateLoginInput = require("../validation/login.validator");
const validateNewPassword = require("../validation/password.validator");
const validateNewEmail = require("../validation/email.validator");

//encryptPassword = pass => bcrypt.hashSync(pass, 10);

/********************* REGISTER *********************/
exports.register = function(req, res, next) {
  // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    }
    let newUser = new User(req.body);
    // Hash password before saving in database
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser
          .save()
          .then(user => res.json(user))
          .catch(err => console.log(err));
      });
    });
  });
};

/********************* READ A USER'S DETAILS BY ID *********************/
exports.readUser = function(req, res, next) {
  User.findById(req.params.id, function(err, user) {
    if (err) {
      res.send(
        "An Error occurred while handling your request, please verify your input"
      );
      return next(err);
    }
    res.send(user);
  });
};

/********************* UPDATE A PASSWORD BY ID *********************/
exports.updateUserPass = function(req, res, next) {
  // Form validation
  const { errors, isValid } = validateNewPassword(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(req.body.password, salt, (err, hash) => {
      if (err) throw err;
      User.findByIdAndUpdate(
        req.params.id,
        { $set: { password: hash } },
        function(err, user) {
          if (err) {
            res.send(
              "An Error occurred while handling your request, please verify your input"
            );
            return next(err);
          }
          res.send("Password udpated.");
        }
      );
    });
  });
};

/********************* UPDATE AN EMAIL BY ID *********************/
exports.updateUserEmail = function(req, res, next) {
  // Form validation
  const { errors, isValid } = validateNewEmail(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  let userEmail = req.body.email.toLowerCase();
  userEmail = userEmail.trim();
  //check if the email is unique
  User.findOne({ email: userEmail }, function(err, user) {
    if (user) {
      res.send("Email already exists ! ");
    } else {
      User.findByIdAndUpdate(
        req.params.id,
        { $set: { email: userEmail } },
        function(err, user) {
          if (err) {
            res.send(
              "An Error occurred while handling your request, please verify your input"
            );
            return next(err);
          }
          res.send("EMAIL udpated.");
        }
      );
    }
  });
};

/********************* UPDATE A USER BY ID *********************/
exports.updateUser = function(req, res, next) {
  if (req.body.email || req.body.password) {
    res.send("error, can't update email or passord with this route");
  } else {
    let tempUser = req.body;
    User.findByIdAndUpdate(req.params.id, tempUser, function(err, user) {
      if (err) {
        res.send(
          "An Error occurred while handling your request, please verify your input"
        );
        return next(err);
      }
      res.send("User udpated.");
    });
  }
};

/********************* DELETE A USER BY ID *********************/
exports.deleteUser = function(req, res, next) {
  User.findByIdAndDelete(req.params.id, function(err) {
    if (err) {
      res.send(
        "An Error occurred while handling your request, please verify your input"
      );
      return next(err);
    }
    res.send("user deleted successfully! ");
  });
};
