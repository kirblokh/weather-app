const request = require('request')

const windspeed = (latitude, longitude, callback) => {

    const url = 'https://api.darksky.net/forecast/146a363110604707bde05c1666548427/' + latitude + ',' + longitude+'?units=auto'
    request({ url, json: true }, (error, { body }) => {

        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.error) {
            callback("Unable to find the location!", undefined)
        } else {
            callback(undefined, body.currently.windSpeed+(' m/h'))
        }
    })
}
module.exports = windspeed