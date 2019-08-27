const request = require('request')

const newyork = (callback) => {
    const url = 'https://api.darksky.net/forecast/146a363110604707bde05c1666548427/40.7128,-74.0060'

    request({ url: url, json: true }, (error, response) => {
       
        callback(Math.trunc(response.body.currently.temperature)+(' f°'))

    })
}

module.exports = newyork