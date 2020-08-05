const express = require("express");
const router = express.Router();

// @route     GET api/auth
// @des       Get the logged in user
// @access    Private (as we are getting the user thats logged in)
router.get("/", (req, res) => {
  res.send("Get logged in user");
});

// @route     POST api/auth
// @des       Auth user and get token
// @access    Public
router.post("/", (req, res) => {
  res.send("Log in user");
});

module.exports = router;
