var express = require('express.io');
var http = require('http');
var path = require('path');
var app = express();
var routes = require('./routes');
var port = process.env.PORT || 3000;
var usersByRoom = {};
app.http().io();

// all environments
app.set('port', port);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('secret'));
app.use(express.cookieSession());
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);

app.io.configure(function () {
    app.io.set("transports", ["xhr-polling"]);
    app.io.set("polling duration", 10);
});

// Setup the ready route, join room and broadcast to room.
app.io.route('ready', function (req) {
	if (!usersByRoom[req.data.room]) {
		usersByRoom[req.data.room] = [];
	} else {
		console.log('all_existing_users');
		req.io.socket.emit('all_existing_users', usersByRoom[req.data.room]);
	}
	usersByRoom[req.data.room].push(req.data.location);
	req.io.join(req.data);
	req.io.room(req.data).broadcast('announce', {
		message: 'New client in the ' + req.data.room + ' room. '
	});
	req.io.broadcast('location_added', req.data.location);
});

// Send the client html.
app.get('/', routes.index);
app.get('/:roomName', routes.index);

// http.createServer(app).listen(app.get('port'), function test () {
//     console.log('Express server listening on port ' + app.get('port'));
// });
app.listen(port);
console.log('Express is up and running on port 3000');
