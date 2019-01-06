const yargs = require('yargs');
const axios = require('axios')

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

    var encode = encodeURIComponent(argv.address);
    geocodeUrl = `http://www.mapquestapi.com/geocoding/v1/address?key=aKnKUlaeDy5MgRdHpfPwxb43cGIG75mz&location=${encode}`

    axios.get(geocodeUrl).then((response) => {
        console.log(response.data.info.statuscode);
    }).catch((e) => {
        if(e.code === 'ENOTFOUND') {
            console.log('olol')
        }
    });







