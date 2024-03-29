// 1 - requirements part
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// 2 - mission model part
let missionSchema = new Schema({
  title: { type: String, required: true },
  location: { type: String, required: false },
  description: { type: String, required: true },
  endingDate: { type: Date, required: false },
  pictures: { type: [String], required: false },
  points: { type: Number, required: true }
});

// 3 - export the model
module.exports = mongoose.model("Mission", missionSchema, "Missions");
