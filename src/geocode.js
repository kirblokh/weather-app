const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoia2lyYmxva2giLCJhIjoiY2p4emMyZHB2MDFnYzNjczF1ZWhnanJwOCJ9.FtC_9ESMZQaQ-pPwQrkWuA&limit='

    request({ url, json: true }, (error, {body}) => {

        if (error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (body.features.length === 0) {
            callback("Unable to find the location!", undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].text
            })
        }
    })

}

module.exports = geocode