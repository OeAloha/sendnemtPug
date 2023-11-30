'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  event.init({
    packageID: DataTypes.INTEGER,
    status: DataTypes.STRING,
    dateTime: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'event',
  });
  return event;
};