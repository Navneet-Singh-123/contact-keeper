const express = require("express");
const router = express.Router();

// @route     GET api/contacts
// @des       Get all users contacts
// @access    Private
router.get("/", (req, res) => {
  res.send("Get all contacts");
});

// @route     POST api/contacts
// @des       Add a new contact
// @access    Private
router.post("/", (req, res) => {
  res.send("Add a new contact");
});

// @route     PUT api/contacts/:id
// @des       Update contact
// @access    Private
router.put("/:id", (req, res) => {
  res.send("Update contact");
});

// @route     DELETE api/contacts/:id
// @des       delete contact
// @access    Private
router.delete("/:id", (req, res) => {
  res.send("Delete contact");
});

module.exports = router;
