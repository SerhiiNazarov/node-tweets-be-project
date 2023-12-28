const express = require("express");

const { getAllUsers } = require("../../controllers/users");

const { schemas } = require("../../models/users");

const router = express.Router();

router.get("/", getAllUsers);

module.exports = router;
