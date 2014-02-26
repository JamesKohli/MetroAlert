
/*
 * GET home page.
 */

exports.index = function(req, res){

var cheerio = require('cheerio');
var request = require('request');fs = require('fs');

	
	lines = {
		'123': 123,
		'456': 456
	}
	
	request('http://alert.mta.info/', function (error, response, body) {
		if (!error && response.statusCode == 200) {
			
			var $ = cheerio.load(body)
			var status = $('div#L').text();
			status = status.trim();
			console.log(status);
			res.send(body);
		}		
	})
	
	//res.render('main', { title: 'MetroAlert', status: 'On Time' });
};