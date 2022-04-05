'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Score extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Score.belongsTo(models.Student, {foreignKey: 'studentId'})
      Score.belongsTo(models.Class, {foreignKey: 'classId'})
    }
  }
  Score.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    classId: DataTypes.INTEGER,
    studentId: DataTypes.INTEGER,
    score: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Score',
  });
  return Score;
};