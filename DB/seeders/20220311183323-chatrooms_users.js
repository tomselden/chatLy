'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('chatrooms_users', [{
      chatroomId: 1,
      userId: 1,
      isAdmin: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});


  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('chatrooms_users', null, {});
  }
};
