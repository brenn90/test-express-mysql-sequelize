const db = require("../models");
const Student = db.students;
const Op = db.Sequelize.Op;

// Retrieve all Students from the database.
exports.findAll = (req, res) => {
  res.json({msg: 'get all students'})
};
// Update a Student by the id in the request
exports.update = (req, res) => {
  
};