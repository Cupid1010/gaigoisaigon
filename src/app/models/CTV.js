var mongoose = require('mongoose');


var CTVSchema = mongoose.Schema(
  {
    ctvTeleId: String,
    phone: Number,
    password:String,
    level:Number,
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model('CTV', CTVSchema);
