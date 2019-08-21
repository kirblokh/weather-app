const request = require('request')
const express = require('express')
const path = require('path')
const geocode = require('./geocode')
const forecast = require('./forecast')
const forecast1 = require('./forecast1')
const bellevue = require('./bellevue')


const app = express()

const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, '../public')));


app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address'
        })
    }
    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({ error })
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }
            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })
})
app.get('/weather1', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address'
        })
    }
    geocode(req.query.address, (error, { latitude, longitude } = {}) => {
        if (error) {
            return res.send({ error })
        }
        forecast1(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }
            res.send({
                forecast1: forecastData
            })
        })
    })
})

app.get('/Bellevue', (req, res) => {
    bellevue((forecastData) => {
        res.send({
            bellevue: forecastData
        })
    })
})

app.listen(port, () => {

    console.log('Server is up on port ' + port);

})
