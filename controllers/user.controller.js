const User = require("../models/user.model");
const bcrypt = require("bcrypt");

encryptPassword = pass => bcrypt.hashSync(pass, 10);

/********************* CREATE A USER *********************/
exports.createUser = function(req, res, next) {
  //check if the email is unique
  let userEmail = req.body.email.toLowerCase();
  userEmail = userEmail.trim();

  User.findOne({ email: userEmail }, function(err, user) {
    if (user) {
      res.send("User already exists ! ");
    } else {
      console.log("User doesn't exists !");
      let user = new User(req.body);
      //hashing the entred password before saving it .
      user.password = encryptPassword(req.body.password);
      user.balance = 0;
      user.save(function(err) {
        if (err) {
          res.send(
            "An Error occurred while handling your request, please verify your input"
          );
          return next(err);
        }
        res.send("User Created successfully");
      });
    }
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
  let newPassword = encryptPassword(req.body.password);
  User.findByIdAndUpdate(
    req.params.id,
    { $set: { password: newPassword } },
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
};

/********************* UPDATE AN EMAIL BY ID *********************/
exports.updateUserEmail = function(req, res, next) {
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

/* exports.test = function(req, res, next) {
  res.send("hello test");
}; */
