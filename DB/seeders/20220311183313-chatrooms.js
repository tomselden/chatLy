'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('chatrooms', [{
      name: "chatroom 1",
      createdBy: 1,
      imageURL: `https://picsum.photos/200?name=chatroom&key=${0}`,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

    
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('chatrooms', null, {});
  }
};
