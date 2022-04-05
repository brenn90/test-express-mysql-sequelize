const db = require("../models");
const Score = db.Score;

// Retrieve all Scores
exports.findAll = async (req, res) => {
  try {
    const result = await Score.findAll({
      attributes: ['studentId', 'classId', 'score']
    })
    res.json(result)
  } catch(e) {
    res.json({
      statusCode: 500,
      msg: 'Error in DB access'
    })
  }
};

// Update single score based on scoreId
exports.updateScore = async (req, res) => {
  try {
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
  } catch(e) {
    res.json({
      statusCode: 500,
      msg: 'Error in DB access'
    })
  }
};

// Update multiple scores (of one student)
exports.updateScores = async(req, res) => {
  console.log('u-d scores: ')
  const scores = req.body.scores

  try {
    Object.keys(scores).forEach(async (scoreId) => {
      await Score.update({ score: scores[scoreId] }, { where: { id: scoreId }})
    })

    res.json({
      msg: 'Success'
    })
  } catch(e) {
    res.json({
      statusCode: 500,
      msg: 'Error in DB access'
    })
  }
}