const request = require('request')

const tokyo = (callback) => {
    const url = 'https://api.darksky.net/forecast/146a363110604707bde05c1666548427/35.68,139.77'

    request({ url: url, json: true }, (error, response) => {
       
        callback(Math.trunc(response.body.currently.temperature)+(' f°'))

    })
}

module.exports = tokyo