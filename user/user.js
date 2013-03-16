var post_user = function(request, response){
	var user_data = request.body;
	console.log(user_data);
	response.status(404);
}

var get_user = function(request, response){
	
}

var put_user = function(request, response){
	var user_data = request.body;
	console.log(user_data);
}

var delete_user = function(request, response){
	
}

exports.put_user = put_user;
exports.get_user = get_user;
exports.post_user = post_user;
exports.delete_user = delete_user;