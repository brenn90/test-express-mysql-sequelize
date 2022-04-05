'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Classes', [
      {
        name: 'Math',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'History',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Physics',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Classes', null, {});
  }
};
