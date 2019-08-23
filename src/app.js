const express = require('express')
const path = require('path')
const geocode = require('./geocode')
const forecast = require('./forecast')
const degree = require('./degree')
const bellevue = require('./bellevue')
const windspeed = require('./windspeed')
const percip=require('./percip')



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
app.get('/degree', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address'
        })
    }
  geocode(req.query.address, (error, { latitude, longitude } = {}) => {
        if (error) {
            return res.send({ error })
        }
        degree(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }
            res.send({
                degree: forecastData
            })
        })
    })
})
app.get('/windspeed', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address'
        })
    }
  geocode(req.query.address, (error, { latitude, longitude } = {}) => {
        if (error) {
            return res.send({ error })
        }
        windspeed(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }
            res.send({
                windspeed: forecastData
            })
        })
    })
})
app.get('/percip', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address'
        })
    }
   geocode(req.query.address, (error, { latitude, longitude } = {}) => {
          if (error) {
              return res.send({ error })
          }
          percip(latitude, longitude, (error, forecastData) => {
              if (error) {
                  return res.send({ error })
              }
              res.send({
                  percip: forecastData
              })
          })
      })
  })
// app.get('/bellevue', (req, res) => {
//     icon((forecastData) => {
//         res.send({
//             bellevue: forecastData
//         })
//     })
// })

app.listen(port, () => {

    console.log('Server is up on port ' + port);

})
