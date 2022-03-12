'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class chatrooms extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            models.chatrooms.hasMany(models.messages)
            models.chatrooms.belongsToMany(models.users, { through: 'chatrooms_users' }); // A BelongsToMany B through the junction table C
        }
    }

    chatrooms.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.STRING,
        imageURL: DataTypes.STRING,
        createdBy: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'chatrooms',
    });
    return chatrooms;
};
