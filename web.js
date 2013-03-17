var express = require('express');
var user = require('./user/user.js');
var medic = require('./medic/medic.js');

var app = express.createServer();

app.use(express.logger('dev')); /* 'default', 'short', 'tiny', 'dev' */
app.use(express.bodyParser());
app.use(express.methodOverride());



// Test Condition
app.get('/', function(request, response) {
  response.send('Api Running!');
});

/*
Routers for user
*/

app.get('/user', user.get_users);

app.get('/user:authtoken', user.get_userByAuthToken);

app.post('/user', user.post_user);

app.put('/user/:authtoken', user.put_user);

app.delete('/user/:authtoken', user.delete_user);


/*
Routers for medic
*/

app.get('/medic', medic.get_medics);


var port = process.env.PORT || 5000;

app.listen(port);