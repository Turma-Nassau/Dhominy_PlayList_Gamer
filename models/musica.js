'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Musica extends Model {
    
  }
  Musica.init({
    titulo: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    artista: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Musica',
  });
  return Musica;
};
