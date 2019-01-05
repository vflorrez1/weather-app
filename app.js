
var request = require('request');
// const yargs = require('yargs');

// const geocode = require('./geocode/geocode')

// const argv = yargs

//     .options({
//         a: {
//             demand: true,
//             alias: 'address',
//             describe: 'Address to fetch weather for',
//             string: true
//         }
//     })
//     .help()
//     .alias('help', 'h')
//     .argv; 

// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//     if (errorMessage) {
//         console.log(errorMessage);
//     } else {
//         console.log(JSON.stringify(results, undefined, 2));
//     }
// });



request({
    url: 'https://api.darksky.net/forecast/cd729a0a67f153c54b1967c132467101/39.936521,-75.15489',
    json: true
}, (error, response, body) => {
    if(!error && response.statusCode === 200) {
        console.log(body.currently.temperature)
    } else {
        console.log(`Unable to fetch weather. Error: ${response.statusCode}.`)
    }
})



