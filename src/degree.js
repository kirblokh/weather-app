const request = require('request')

const degree = (latitude, longitude, callback) => {

    const url = 'https://api.darksky.net/forecast/146a363110604707bde05c1666548427/' + latitude + ',' + longitude 
    request({ url, json: true }, (error, { body }) => {

        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.error) {
            callback("Unable to find the location!", undefined)
        } else {
            callback(undefined, Math.trunc(body.currently.temperature)+(' f°'))
        }
    })
}
module.exports = degree