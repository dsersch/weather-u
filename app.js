const request = require("request")

request({
    url: "https://maps.googleapis.com/maps/api/geocode/json?address=10767%20woodbine%20street%20los%20angeles",
    json: true
}, (error, response, body) => {
    console.log(body)
})