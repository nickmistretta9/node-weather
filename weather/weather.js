const request = require('request');

var getWeather = (lat, lng, callback) => {
	request({
	url:`https://api.darksky.net/forecast/9fcf28e79298a3e28cb380b618d5ebff/${lat},${lng}`,
	json:true
	}, (error, response, body) => {
		if (!error && response.statusCode === 200) {
			callback(undefined, {
				temperature: body.currently.temperature,
				apparentTemperature:body.currently.apparentTemperature
			});
		} else {
			callback('Unable to fetch weather');
		}
	});
}

module.exports.getWeather = getWeather;