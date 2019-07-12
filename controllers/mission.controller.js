const Mission = require("../models/mission.model");

/********************* CREATE A MISSION *********************/
exports.createMission = function(req, res) {
  let mission = new Mission(req.body);
  mission.save(function(err) {
    if (err) {
      res
        .status(400)
        .send(
          "An Error occurred while handling your request, please verify your input"
        );
    }
    res.status(201).send("Mission Created successfully");
  });
};

/********************* READ A MISSION'S DETAILS BY ID *********************/
exports.readMission = function(req, res) {
  Mission.findById(req.params.id, function(err, mission) {
    if (err) {
      res.status(404).send("Mission Not Found !");
    }
    res.status(200).send(mission);
  });
};

/********************* UPDATE A MISSION BY ID *********************/
exports.updateMission = function(req, res) {
  Mission.findByIdAndUpdate(req.params.id, { $set: req.body }, function(
    err,
    mission
  ) {
    if (err) {
      res.status(404).send(
        "An Error occurred while handling your request, please verify your input"
      );
    }
    res.status(200).send("Mission udpated.");
  });
};

/********************* DELETE A MISSION BY ID *********************/
exports.deleteMission = function(req, res) {
  Mission.findByIdAndDelete(req.params.id, function(err) {
    if (err) {
      res.status(404).send(
        "Mission Not Found !"
      );
    }
    res.status(200).send("Mission deleted successfully!");
  });
};
