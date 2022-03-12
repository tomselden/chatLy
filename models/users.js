'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.users.belongsToMany(models.chatrooms, { through: 'chatrooms_users' }); // A BelongsToMany B through the junction table C
      // define association here
    }
  }
  users.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true // Automatically gets converted to SERIAL for postgres
    },
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    avatarURL: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};
