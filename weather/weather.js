const request = require('request')
const stuff = require('../stuff/stuff.js')

const key = stuff.key

const getWeather = (lat, long, callback) => {
    request({
        url: `https://api.darksky.net/forecast/${key}/${lat},${long}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temp: body.currently.temperature,
                apparentTemp: body.currently.apparentTemperature
            })
        } else {
            callback("😱 Unable to fetch weather...")
        }
    })
}

module.exports.getWeather = getWeather