const request = require('request');

var getWeather = (lat, long, callback) => {
    request({
        url: `https://api.darksky.net/forecast/cd729a0a67f153c54b1967c132467101/${lat},${long}`,
        json: true
    }, (error, response, body) => {
        if(!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        } else {
            callback(`Unable to fetch weather. Error: ${response.statusCode}.`);
        }
    });
}

module.exports.getWeather = getWeather;