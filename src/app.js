const request = require('request')
const express = require('express')
const path = require('path')
const geocode = require('./geocode')
const forecast = require('./forecast')
const forecast1 = require('./forecast1')
const redmond = require('./redmond')
const kirkland = require('./kirkland')
const bellevue = require('./bellevue')
const bothell = require('./bothell')
const kent = require('./kent')
const renton = require('./renton')
const tukwila = require('./tukwila')
const seatac = require('./seatac')
const burien = require('./burien')
const kenmore = require('./kenmore')


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
app.get('/Redmond', (req, res) => {
    redmond((forecastData) => {
        res.send({
            redmond: forecastData
        })
    })
})
app.get('/Kirkland', (req, res) => {
    kirkland((forecastData) => {
        res.send({
            kirkland: forecastData
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
app.get('/Bothell', (req, res) => {
    bothell((forecastData) => {
        res.send({
            bothell: forecastData
        })
    })
})
app.get('/Kent', (req, res) => {
    kent((forecastData) => {
        res.send({
            kent: forecastData
        })
    })
})
app.get('/Renton', (req, res) => {
    renton((forecastData) => {
        res.send({
            renton: forecastData
        })
    })
})
app.get('/Tukwila', (req, res) => {
    tukwila((forecastData) => {
        res.send({
            tukwila: forecastData
        })
    })
})
app.get('/SeaTac', (req, res) => {
    seatac((forecastData) => {
        res.send({
            seatac: forecastData
        })
    })
})
app.get('/Kenmore', (req, res) => {
    kenmore((forecastData) => {
        res.send({
            kenmore: forecastData
        })
    })
})
app.get('/Burien', (req, res) => {
    burien((forecastData) => {
        res.send({
            burien: forecastData
        })
    })
})



app.listen(port, () => {

    console.log('Server is up on port ' + port);

})
