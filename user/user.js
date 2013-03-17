//var dbHandler = require('../dbHandler.js');

var db_name = 'doctorPages_user';
var collection_name = 'doctorPages_user';

var post_user = function(request, response){
	var user_data = request.body;
	console.log(user_data);
	response.status(200).send('done');
	dbHandler.insert(db_name, collection_name, user_data);
}

var get_users = function(request, response){
	response.send('klsafnla');
	response.status(200).send('done');

}

var get_userByAuthToken = function(request, response){
	
}

var put_user = function(request, response){
	var user_data = request.body;
	console.log(user_data);
}

var delete_user = function(request, response){
	
}

exports.put_user = put_user;
exports.get_users = get_users;
exports.get_userByAuthToken = get_userByAuthToken;
exports.post_user = post_user;
exports.delete_user = delete_user;