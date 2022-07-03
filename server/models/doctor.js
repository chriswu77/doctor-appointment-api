const { DataTypes } = require('sequelize')
const sequelize = require('../../db')

const Doctor = sequelize.define('doctor', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

module.exports = Doctor
