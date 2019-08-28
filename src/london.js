const request = require('request')

const london = (callback) => {
    const url = 'https://api.darksky.net/forecast/146a363110604707bde05c1666548427/51.50722,-0.1275'

    request({ url: url, json: true }, (error, response) => {
       
        callback(Math.trunc(response.body.currently.temperature)+(' f°'))

    })
}

module.exports = london