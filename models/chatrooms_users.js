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
            // define association here
        }
    }
    chatroom_users.init({
        id: DataTypes.UUID,
        chatroomid: DataTypes.UUID,
        userid: DataTypes.UUID,
        isadmin: DataTypes.BOOLEAN,
    }, {
        sequelize,
        modelName: 'chatroom_users',
    });
    return chatroom_users;
};