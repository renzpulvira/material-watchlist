const mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  validator = require("validator"),
  { isEmail } = validator,
  bcryptjs = require("bcryptjs");

const UserSchema = new Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
});

UserSchema.pre("save", function (next) {
  var user = this;

  bcryptjs.genSalt(10, function (err, salt) {
    bcryptjs.hash(user.password, salt, function (err, hash) {
      user.password = hash;
      next();
    });
  });
});

module.exports = mongoose.model("User", UserSchema);
