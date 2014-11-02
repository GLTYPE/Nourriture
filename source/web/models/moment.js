// MOMENT MODEL
var mongoose = require("mongoose");

var MomentSchema = new mongoose.Schema({
    name: String,
    owner_id: mongoose.Schema.Types.ObjectId,
    date: Date,
    description: String
});

var Moment = mongoose.model('Moment', MomentSchema);

module.exports = {
  Moment: Moment
}
