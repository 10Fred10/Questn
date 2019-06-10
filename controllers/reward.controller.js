const Reward = require("../models/reward.model");

/********************* CREATE A Reward *********************/
exports.createReward = function(req, res) {
  let reward = new Reward(req.body);
  reward.save(function(err) {
    if (err) {
      res
        .status(400)
        .send(
          "An Error occurred while handling your request, please verify your input"
        );
    }
    res.status(201).send("Reward Created successfully");
  });
};

/********************* READ A Reward'S DETAILS BY ID *********************/
exports.readReward = function(req, res) {
  Reward.findById(req.params.id, function(err, reward) {
    if (err) {
      res
        .status(400)
        .send(
          "An Error occurred while handling your request, please verify your input"
        );
    }
    res.status(200).send(reward);
  });
};

/********************* UPDATE A Reward BY ID *********************/
exports.updateReward = function(req, res) {
  Reward.findByIdAndUpdate(req.params.id, { $set: req.body }, function(
    err,
    reward
  ) {
    if (err) {
      res
        .status(400)
        .send(
          "An Error occurred while handling your request, please verify your input"
        );
    }
    res.status(200).send("Reward udpated.");
  });
};

/********************* DELETE A Reward BY ID *********************/
exports.deleteReward = function(req, res) {
  Reward.findByIdAndDelete(req.params.id, function(err) {
    if (err) {
      res
        .status(400)
        .send(
          "An Error occurred while handling your request, please verify your input"
        );
    }
    res.status(200).send("Reward deleted successfully! ");
  });
};
