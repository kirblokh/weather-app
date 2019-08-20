const request = require('request')

const bothel = (callback) => {
    const url = 'https://api.darksky.net/forecast/146a363110604707bde05c1666548427/47.7601,-122.2054'

    request({ url: url, json: true }, (error, response) => {
       
        callback(Math.trunc(response.body.currently.temperature)+'℉' )

    })
}

module.exports = bothel