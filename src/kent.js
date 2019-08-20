const request = require('request')

const kent = (callback) => {
    const url = 'https://api.darksky.net/forecast/146a363110604707bde05c1666548427/47.3809,-122.2348'

    request({ url: url, json: true }, (error, response) => {
       
        callback(Math.trunc(response.body.currently.temperature)+'℉' )

    })
}

module.exports = kent