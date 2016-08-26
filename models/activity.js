'use strict';
module.exports = function(sequelize, DataTypes) {
  var activity = sequelize.define('activity', {
    org: DataTypes.STRING,
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    date: DataTypes.STRING,
    hours: DataTypes.INTEGER,
    event: DataTypes.STRING 
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return activity;
};