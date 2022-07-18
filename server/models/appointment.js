const { DataTypes } = require('sequelize')
const Doctor = require('./doctor')
const sequelize = require('../../db')

const Appointment = sequelize.define('appointment', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    time: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    kind: {
        type: DataTypes.ENUM('new', 'followUp'),
        allowNull: false,
        defaultValue: 'new',
    },
    doctorId: {
        type: DataTypes.UUID,
        references: {
            model: Doctor,
            key: 'id',
        },
    },
})

module.exports = Appointment
