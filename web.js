var express = require('express');
var user = require('./user/user.js');

var app = express.createServer();

app.use(express.logger('dev')); /* 'default', 'short', 'tiny', 'dev' */
app.use(express.bodyParser());
app.use(express.methodOverride());

app.get('/', function(request, response) {
  response.send('Api Running!');
});

app.get('/user', user.get_user);

app.put('/user', user.put_user);

app.post('/user', user.post_user);

app.delete('/user', user.delete_user);

var port = process.env.PORT || 5000;

app.listen(port);