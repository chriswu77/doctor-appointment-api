const Doctor = require('../models/doctor')
const Appointment = require('../models/appointment')
const { getDateWithoutTime } = require('../util')

exports.index = async (req, res, next) => {
    try {
        const doctors = await Doctor.findAll()

        res.status(200).json(doctors)
    } catch (err) {
        next(err)
    }
}

exports.create = async (req, res, next) => {
    const { firstName, lastName } = req.body

    try {
        const doctor = await Doctor.create({
            firstName: firstName,
            lastName: lastName,
        })

        res.status(201).json(doctor)
    } catch (err) {
        next(err)
    }
}

exports.getAppointments = async (req, res, next) => {
    const { doctorId } = req.params

    // query param should be date converted to ISO string
    const { date } = req.query

    try {
        const doctor = await Doctor.findByPk(doctorId)

        let appointments

        if (date) {
            const convertedDate = new Date(date)

            appointments = await doctor.getAppointments({
                where: {
                    dateOnly: getDateWithoutTime(convertedDate),
                },
            })
        } else {
            appointments = await doctor.getAppointments()
        }

        res.status(200).json(appointments)
    } catch (err) {
        next(err)
    }
}

exports.deleteAppointment = async (req, res, next) => {
    const { doctorId, appointmentId } = req.params

    try {
        const doctor = await Doctor.findByPk(doctorId)

        await doctor.removeAppointment(appointmentId)

        res.sendStatus(204)
    } catch (err) {
        next(err)
    }
}

exports.createAppointment = async (req, res, next) => {
    const { doctorId } = req.params

    // date should be ISO string
    const { firstName, lastName, date } = req.body

    try {
        const convertedDate = new Date(date)

        const minutes = convertedDate.getMinutes()
        const options = [0, 15, 30, 45]

        if (!options.includes(minutes)) {
            throw new Error('Appointment time is not valid')
        }

        const doctor = await Doctor.findByPk(doctorId)

        const sameAppointmentsCount = await doctor.countAppointments({
            where: {
                dateTime: convertedDate,
            },
        })

        if (sameAppointmentsCount >= 3) {
            throw new Error('No availability at current time')
        }

        const patientAppointmentsCount = await doctor.countAppointments({
            where: {
                firstName: firstName,
                lastName: lastName,
            },
        })

        const [newAppointment, created] = await Appointment.findOrCreate({
            where: {
                firstName: firstName,
                lastName: lastName,
                dateTime: convertedDate,
            },
            defaults: {
                dateOnly: getDateWithoutTime(convertedDate),
                kind: patientAppointmentsCount > 0 ? 'followUp' : 'new',
                doctorId: doctorId,
            },
        })

        if (!created) {
            throw new Error('Appointment already exists')
        }

        res.status(201).json(newAppointment)
    } catch (err) {
        next(err)
    }
}
