const request =  require('request');


var geocodeAddress = (address, callback) => {
    var encode = encodeURIComponent(address)
    request({
        url: `http://www.mapquestapi.com/geocoding/v1/address?key=aKnKUlaeDy5MgRdHpfPwxb43cGIG75mz&location=${encode}`,
        json: true
    }, (error, response, body) =>{
        if (response.statusCode !== 200) {
            callback('unable to connect to server');
        } else {
        callback(undefined, {
            latitude: body.results[0].locations[0].latLng.lat,
            longitude: body.results[0].locations[0].latLng.lng
         });
        }   
    });
};

module.exports = {
    geocodeAddress
};
