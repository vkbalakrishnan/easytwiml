var js2xmlparser = require("js2xmlparser");
var url = require('url');
var querystring = require("querystring");

exports.getXML = function(req,res){
	var url_request = url.parse(req.url).query;
	var query = querystring.parse(url_request);
	if(query.hasOwnProperty( 'text' ) && query.text != undefined && query.voice == 'woman' ){
 		data = {
			"Say": {
				"@" : {"voice" : "woman"},
				"#" : query.text
			}
		}
	} else if(query.hasOwnProperty( 'text' ) && query.text != undefined ){
 		data = {
			"Say": query.text
		}
	} else if(query.hasOwnProperty( 'json' ) && query.json != undefined && query.voice == 'woman' ){
 		data = JSON.parse(query.json);
	}
	var callxml = js2xmlparser("Response", data);
	console.log(callxml);
	res.statusCode = 200;
	res.send(callxml);
};
