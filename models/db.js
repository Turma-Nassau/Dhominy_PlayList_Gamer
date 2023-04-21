const Sequelize = require('sequelize')
// conexao com banco de dados mysql
const sequelize = new Sequelize('radiorock', 'root', 'dhominy',{
    host: "localhost",
    dialect: 'mysql'
  })

  module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
  }