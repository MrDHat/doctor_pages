var get_medics = function(request, response) {
	var user_data = request.body;
	var sort_by ;
	console.log(user_data);
	response.send('kdsnkf');
	
	if(request.query.name)
		sort_by = request.query.name;
	if(request.query.type)
		sort_by = request.query.type;
	if(request.query.speciality)
		sort_by = request.query.speciality;
	if(request.query.location)
		sort_by = request.query.location;
}

exports.get_medics = get_medics;
