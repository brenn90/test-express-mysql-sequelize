const db = require("../models");
const Score = db.Score;

// Retrieve all Scores from the database.
exports.findAll = async (req, res) => {
  const result = await Score.findAll({
    attributes: ['studentId', 'classId', 'score']
  })
  res.json(result)
};

exports.updateScore = async (req, res) => {
  const scoreId = req.params.id
  const score = req.body.score

  const result = await Score.update(
    {
      score: score
    },
    {
      returning: true,
      where: {
        id: scoreId
      }
    }
  )

  res.json(result)
};