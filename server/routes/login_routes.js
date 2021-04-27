const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const bcryptjs = require("bcryptjs");

router.post("/", (req, res) => {
  let userCheck = req.body;
  User.findOne({ email: userCheck.email }, function (err, result) {
    if (err) return console.log(err);
    console.log(result);

    bcryptjs.compare(
      userCheck.password,
      result.password,
      function (err, theResult) {
        if (theResult) {
          console.log("login confirmed!");
          return res.send();
        } else {
          return res.status(500).send();
        }
      }
    );
  });
});

module.exports = router;
