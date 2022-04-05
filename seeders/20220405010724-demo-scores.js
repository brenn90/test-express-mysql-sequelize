'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Scores', [
      {
        id: 1,
        studentId: 1,
        classId: 1,
        score: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        studentId: 1,
        classId: 2,
        score: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        studentId: 1,
        classId: 3,
        score: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        studentId: 2,
        classId: 1,
        score: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        studentId: 2,
        classId: 2,
        score: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        studentId: 2,
        classId: 3,
        score: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        studentId: 3,
        classId: 1,
        score: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        studentId: 3,
        classId: 2,
        score: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        studentId: 3,
        classId: 3,
        score: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10,
        studentId: 4,
        classId: 1,
        score: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 11,
        studentId: 4,
        classId: 2,
        score: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 12,
        studentId: 4,
        classId: 3,
        score: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 13,
        studentId: 5,
        classId: 1,
        score: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 14,
        studentId: 5,
        classId: 2,
        score: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 15,
        studentId: 5,
        classId: 3,
        score: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Scores', null, {});
  }
};
