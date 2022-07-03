const doctorRouter = require('express').Router()
const doctorController = require('../controllers/doctor')

doctorRouter.get('/', doctorController.index)

doctorRouter.post('/', doctorController.create)

doctorRouter.get('/:doctorId/appointments', doctorController.getAllAppointments)

doctorRouter.delete(
    '/:doctorId/appointments/:appointmentId',
    doctorController.deleteAppointment
)

doctorRouter.post('/:doctorId/appointments', doctorController.createAppointment)

module.exports = doctorRouter
