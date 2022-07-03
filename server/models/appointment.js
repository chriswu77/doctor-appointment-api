const { DataTypes } = require('sequelize')
const Doctor = require('./doctor')
const sequelize = require('../../db')

const Appointment = sequelize.define('appointment', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dateTime: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    dateOnly: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    kind: {
        type: DataTypes.ENUM('new', 'followUp'),
        allowNull: false,
        defaultValue: 'new',
    },
    doctorId: {
        type: DataTypes.INTEGER,
        references: {
            model: Doctor,
            key: 'id',
        },
    },
})

module.exports = Appointment
