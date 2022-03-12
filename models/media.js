'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class media extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    media.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        chatroomid: DataTypes.UUID,
        userid: DataTypes.UUID,
        mediaType: DataTypes.STRING,
        file: DataTypes.BLOB,
    }, {
        sequelize,
        modelName: 'media',
    });
    return media;
};