const express = require('express');
const router = express.Router();
const scoreController = require('../controllers/score.controller');

router.get("/", scoreController.findAll);
router.put("/:id", scoreController.updateScore);

module.exports = router;
