const request =  require('request');
const yargs = require('yargs');

const argv = yargs

    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv; 

    var encode = encodeURIComponent(argv.address)
    

request({
    url: `http://www.mapquestapi.com/geocoding/v1/address?key=aKnKUlaeDy5MgRdHpfPwxb43cGIG75mz&location=${encode}`,
    json: true
}, (error, response, body) =>{
    if (error) {
        console.log('unable to connect to server')
    } else {
    console.log(`Latitude: ${body.results[0].locations[0].latLng.lat}`);
    console.log(`Longitude: ${body.results[0].locations[0].latLng.lng}`);
    }   
});