const Doctor = require('./doctor')
const Appointment = require('./appointment')

Doctor.hasMany(Appointment)
Appointment.belongsTo(Doctor)
