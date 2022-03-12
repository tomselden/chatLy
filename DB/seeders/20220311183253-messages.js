'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('messages', [{
      chatroomId: 1,
      userId: 1,
      imageURL: `https://picsum.photos/200?name=messages&key=${0}`,
      text: "some text",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('messages', null, {});
  }
};
