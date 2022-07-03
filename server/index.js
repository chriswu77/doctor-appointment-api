const app = require('./app')
const sequelize = require('../db')

require('./models/associations')

sequelize
    .authenticate()
    .then(() => {
        console.log('Database connection has been established successfully')
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err)
    })

sequelize
    .sync()
    .then(() => {
        console.log('Models were synced successfully')
    })
    .catch((err) => {
        console.error('Could not sync models:', err)
    })

const port = 3000

app.listen(port, (err) => {
    if (err) {
        console.error('Server could not connect')
    } else {
        console.log(`Server connected on port ${port}`)
    }
})
