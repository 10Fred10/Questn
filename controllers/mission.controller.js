const Mission = require('../models/mission.model');

/********************* CREATE A MISSION *********************/
exports.createMission = function (req, res, next) {            
                let mission = new Mission(
                    {
                        title: req.body.title,
                        location: req.body.location,
                        description: req.body.description,
                        endingDate: req.body.endingDate,
                        pictures: req.body.pictures,
                        points : req.body.points
                        }
                );
                mission.save(function (err) {
                    if (err)  {
                        res.send("An Error occurred while handling your request, please verify your input");
                        return next(err);
                    }
                    res.send('Mission Created successfully')
                });
};

/********************* READ A MISSION'S DETAILS BY ID *********************/
exports.readMission = function (req, res, next) {
    Mission.findById(req.params.id, function (err, mission) {
        if (err)  {
            res.send("An Error occurred while handling your request, please verify your input");
            return next(err);
        }
        res.send(mission);
    })
}

/********************* UPDATE A MISSION BY ID *********************/
exports.updateMission = function (req,res,next) {

        Mission.findByIdAndUpdate(req.params.id, {$set : req.body },function (err, mission) { 
            if (err)   {
                res.send("An Error occurred while handling your request, please verify your input");
                return next(err);
            }
            res.send('Mission udpated.');
        });  
}

/********************* DELETE A MISSION BY ID *********************/
exports.deleteMission = function (req, res, next) {
    Mission.findByIdAndDelete(req.params.id, function (err) {
        if(err) {
            res.send("An Error occurred while handling your request, please verify your input");
            return next(err);
        }
        res.send("Mission deleted successfully! ");
    })
}