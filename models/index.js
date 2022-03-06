'use strict';

const { dir } = require('console');
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = 'index.js';
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

/* Custom handler for reading current working directory */
const models = process.cwd() + '/models/' || __dirname;
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
/* fs.readdirSync(__dirname) */
fs.readdirSync(models)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    );
  })
  .forEach(file => {
    /* const model = sequelize["import"](path.join(__dirname, file)); */
    // const model = sequelize['import'](path.join(models, file));
    const model = require(path.join(models, file))(sequelize, Sequelize.DataTypes)
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
