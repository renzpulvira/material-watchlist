const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

router.post("/", (req, res) => {
  const user = new User({
    email: req.body.email,
    password: req.body.password,
  });

  user
    .save()
    .then((result) => {
      res.send(result);
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/get-users", (req, res) => {
  const allUsers = User.findOne({});
  // Test
  try {
    res.send(allUsers);
  } catch (error) {
    response.status(500).send(error);
  }
});

module.exports = router;
