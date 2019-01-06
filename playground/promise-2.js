var request = require('request');


var geocodeAddre = (address) => {
    return new Promise((resolve, reject) => {
        var encode = encodeURIComponent(address)
        request({
            url: `http://www.mapquestapi.com/geocoding/v1/address?key=aKnKUlaeDy5MgRdHpfPwxb43cGIG75mz&location=${encode}`,
            json: true
        }, (error, response, body) => {
            if (response.statusCode !== 200) {
                reject('cannot connect to server')
            } else {
                resolve({
                    latitude: body.results[0].locations[0].latLng.lat,
                    longitude: body.results[0].locations[0].latLng.lng
                });
            }
        });
    })
};

geocodeAddre('19146').then((res) => {
    console.log(res);
}, (er) => {
    console.log(er);
});