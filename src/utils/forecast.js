const request = require('request');

const forecast = function (latitude, longitude, callback){

    const url = 'https://api.darksky.net/forecast/78f768c0c2be2e0e6201d79adf0c3cb8/' + latitude + ',' + longitude;
    request({ url, json: true }, (error, { body }) =>{
        if (error){
            callback('unable to access weather services')
        } else if (body.error){
            callback('unable to find location')
        } else {
            callback(undefined, `The temperature is ${body.currently.temperature} with a ${body.currently.precipProbability}% chance of rain`

            )
        }
    })
};

module.exports = forecast;
