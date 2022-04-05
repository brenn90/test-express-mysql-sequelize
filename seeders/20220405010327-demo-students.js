'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Students', [
      {
        name: 'John',
        email: 'john@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Richard',
        email: 'richard@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Danny',
        email: 'danny@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Albert',
        email: 'albert@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Chris',
        email: 'chris@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Students', null, {});
  }
};
