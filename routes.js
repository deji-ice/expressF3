const express = require("express");

const users = require("./data.json")

const router = express.Router();


router.get("/users", (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 
             'Origin, X-Requested-With, Content-Type, Accept');
  res.send(users);
});
router.get("/food", (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 
             'Origin, X-Requested-With, Content-Type, Accept');
  res.send("eba");
});

module.exports = router;
