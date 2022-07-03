const { Sequelize } = require('sequelize')

const dbName = 'calendar'
const username = 'postgres'
const password = ''

const sequelize = new Sequelize(dbName, username, password, {
    host: 'localhost',
    dialect: 'postgres',
})

module.exports = sequelize
