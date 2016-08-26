'use strict';
module.exports = function(sequelize, DataTypes) {
  var organization = sequelize.define('organization', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return organization;
};