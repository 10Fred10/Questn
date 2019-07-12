const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

// Load input validation
const validateRegisterInput = require("../validation/register.validator");
const validateLoginInput = require("../validation/login.validator");
const validateNewPassword = require("../validation/password.validator");
const validateNewEmail = require("../validation/email.validator");

/********************* LOGIN *********************/
exports.login = function(req, res) {
  // Form validation
  const { errors, isValid } = validateLoginInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;
  // Find user by email
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }
    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.firstName
        };
        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 86400 // 24h in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res
          .status(403)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
};

/********************* REGISTER *********************/
exports.register = function(req, res) {
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
          .then(user => res.status(201).json(user))
          .catch(err => console.log(err));
      });
    });
  });
};

/********************* READ A USER'S DETAILS BY ID *********************/
exports.readUser = function(req, res) {
  try {
    let userId = req.params.id;
    console.log(userId);
    User.findById(userId, function(err, user) {
      if (err) {
        res.status(404).send("User Not found");
      }
      res.status(200).send(user);
    });
  } catch (err) {
    res.status(400).send("ID is missing");
  }
};

/********************* UPDATE A PASSWORD BY ID *********************/
exports.updateUserPass = function(req, res) {
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
            res.status(404).send("User not found");
          }
          res.status(200).send("Password updated.");
        }
      );
    });
  });
};

/********************* UPDATE AN EMAIL BY ID *********************/
exports.updateUserEmail = function(req, res) {
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
      res.status(400).send("Email already exists !");
    } else {
      User.findByIdAndUpdate(
        req.params.id,
        { $set: { email: userEmail } },
        function(err, user) {
          if (err) {
            res.status(400).send("Error occured, please verify your input");
          } else {
            try {
              name = user.firstName;
              res.status(200).send(name + "'s EMAIL updated.");
            } catch (err) {
              res.status(404).send("User not found");
            }
          }
        }
      );
    }
  });
};

/********************* UPDATE A USER BY ID *********************/
exports.updateUser = function(req, res) {
  if (req.body.email || req.body.password) {
    res
      .status(405)
      .send("error, can't update email or passord with this route");
  } else {
    let tempUser = req.body;
    User.findByIdAndUpdate(req.params.id, tempUser, function(err, user) {
      if (err) {
        res.status(404).send("error in input entered or user not found");
      }
      res.status(200).send("User udpated.");
    });
  }
};

/********************* DELETE A USER BY ID *********************/
exports.deleteUser = function(req, res) {
  User.findByIdAndDelete(req.params.id, function(err) {
    if (err) {
      res.status(404).send(
        "User Not Found!"
      );
    }
    res.status(200).send("User deleted successfully!");
  });
};
