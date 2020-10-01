const express = require("express");

const router = express.Router();

//@ route  GET api/auth
//@ desc   Get logged in user
//@ access Private

router.get("/", (req, res) => {
  res.send("Get logged in User");
});

//@route POST api/auth
//@desc Auth user and Get token
//@access   Public

router.get("/", (req, res) => {
  req.send("Log in User");
});

module.exports = router;
