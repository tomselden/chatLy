'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class chatroom_users extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // models.chatrooms_users.belongsTo(models.chatrooms, { foreignKey: "chatroomId" })
            // models.chatrooms_users.belongsTo(models.users, { foreignKey: "userId" })
            // models.messages.belongsTo(models.users, { foreignKey: "userId" })
            // models.chatrooms_users.hasMany(models.users, { foreingKey: 'userId' })
            // models.chatrooms_users.hasMany(models.chatrooms, { foreingKey: 'chatRoomId' })
        }
    }
    chatroom_users.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        chatroomId: {
            type: DataTypes.INTEGER,
            foreignKey: true
        },
        userId: {
            type: DataTypes.INTEGER,
            foreignKey: true
        },
        isadmin: DataTypes.BOOLEAN,
    }, {
        sequelize,
        modelName: 'chatrooms_users',
    });
    return chatroom_users;
};
