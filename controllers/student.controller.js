const db = require("../models");
const Student = db.Student;
const Score = db.Score;
const Class = db.Class;

// Retrieve all Students from the database.
exports.findAll = async (req, res) => {
  try {
    const result = await Student.findAll({
      attributes: ['id', 'name', 'email']
    })
    res.json(result)
  } catch(e) {
    res.json({
      statusCode: 500,
      msg: 'Error in DB access'
    })
  }
};

// Get scores of one student
exports.getScores = async(req, res) => {
  try {
    const studentId = req.params.id
    const result = await Score.findAll({
      where: { studentId: studentId },
      include: [
        {
          model: Class,
        }
      ]
    })

    res.json(result)
  } catch(e) {
    res.json({
      statusCode: 500,
      msg: 'Error in DB access'
    })
  }
}