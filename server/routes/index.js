const router = require('express').Router()
const doctorRouter = require('./doctor')

router.use('/doctors', doctorRouter)

module.exports = router
