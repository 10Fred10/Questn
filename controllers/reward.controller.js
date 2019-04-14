const Reward = require('../models/reward.model');

/********************* CREATE A Reward *********************/
exports.createReward = function (req, res, next) {            
                let reward = new Reward(req.body);
                reward.save(function (err) {
                    if (err)  {
                        res.send("An Error occurred while handling your request, please verify your input");
                        return next(err);
                    }
                    res.send('Reward Created successfully')
                });
};

/********************* READ A Reward'S DETAILS BY ID *********************/
exports.readReward = function (req, res, next) {
    Reward.findById(req.params.id, function (err, reward) {
        if (err)  {
            res.send("An Error occurred while handling your request, please verify your input");
            return next(err);
        }
        res.send(reward);
    })
}

/********************* UPDATE A Reward BY ID *********************/
exports.updateReward = function (req,res,next) {

        Reward.findByIdAndUpdate(req.params.id, {$set : req.body },function (err, reward) { 
            if (err)   {
                res.send("An Error occurred while handling your request, please verify your input");
                return next(err);
            }
            res.send('Reward udpated.');
        });  
}

/********************* DELETE A Reward BY ID *********************/
exports.deleteReward = function (req, res, next) {
    Reward.findByIdAndDelete(req.params.id, function (err) {
        if(err) {
            res.send("An Error occurred while handling your request, please verify your input");
            return next(err);
        }
        res.send("Reward deleted successfully! ");
    })
}