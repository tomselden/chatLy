'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Messages extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Messages.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        chatroomId: DataTypes.INTEGER,
        userId: DataTypes.INTEGER,
        imageURL: DataTypes.STRING,
        text: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'messages',
    });
    return Messages;
};
