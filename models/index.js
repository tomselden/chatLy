
// require('dotenv')();
const fs = require('fs');
const path = require('path');
const { Sequelize, DataTypes } = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const filebasename = 'index.js';
const db = {}

/* Custom handler for reading current working directory */
const models = '../../db/models/';
let sequelize;

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config,
  );
}

fs
  .readdirSync(process.cwd() + '/db/models/' || __dirname)
  .filter((file) => {
    return (file !== filebasename)
      && (file.endsWith('.js'));;
  })
  .map(file => require('../../db/models/' + file))
  .forEach((Model) => {
    const model = Model(sequelize, DataTypes);
    db[model.name] = model
  });


Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

const sequelizeOptions = { logging: console.log, };

// // Removes all tables and recreates them (only available if env is not in production)
// if (DB_FORCE_RESTART === 'true' && process.env.ENV !== 'production') {
//   sequelizeOptions.force = true;
// }

sequelize.sync(sequelizeOptions)
  .catch((err) => {
    console.log(err);
    process.exit();
  });

module.exports = db;