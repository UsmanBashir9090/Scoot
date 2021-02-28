const express       = require('express')
const mongoose      = require('mongoose')
const morgan        = require('morgan')
const bodyParser    = require('body-parser')

const BikeRoute = require('./routes/bike')
const AuthRoute = require('./routes/auth')


mongoose.connect('mongodb://localhost:27017/scootdb', {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection

db.on('error', (err) => {
    console.log(err)
})

db.on('open', () => {
    console.log('Database Connection Established!')
})

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const PORT = process.env.Port || 3000

app.listen(PORT, ()=> {
    console.log('Server is running on port ' + PORT)
})

app.use('/api/bike', BikeRoute)
app.use('/api', AuthRoute)