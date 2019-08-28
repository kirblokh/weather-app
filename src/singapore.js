const request = require('request')

const singapore = (callback) => {
    const url = 'https://api.darksky.net/forecast/146a363110604707bde05c1666548427/1.3,103.8'

    request({ url: url, json: true }, (error, response) => {
       
        callback(Math.trunc(response.body.currently.temperature)+(' f°'))

    })
}

module.exports = singapore