const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

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
          // return res.send(result._id);
          const token = jwt.sign({ _id: result._id }, process.env.JWT_SECRET, {
            expiresIn: 300,
          });

          return res.send({ auth: true, token: token, result: result.email });
        } else {
          return res.status(500).send();
        }
      }
    );
  });
});

module.exports = router;
