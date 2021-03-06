const yargs = require('yargs')
const geocode = require('./geocode/geocode.js')
const weather = require('./weather/weather.js')

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: "address",
            describe: "address to fetch weather for...",
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

geocode.geocodeAddress(argv.a, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage)
    } else {
        console.log(results.address)
        weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
            if (errorMessage) {
                console.log(errorMessage)
            } else {
                console.log(`It's currently ${weatherResults.temp}. If feels like ${weatherResults.apparentTemp}.`)
            }
        })
    }
})