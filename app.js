
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
//var user = require('./routes/user');
var http = require('http');
var path = require('path');
var MongoClient = require('mongodb').MongoClient;
var dbData;
var collection;

var app = express();
app.configure('development', function(){
    dbData = {
        "hostname": "localhost",
        "port": 27017,
        "username": "",
        "password": "",
        "name": "",
        "db": "woodhouse"
    };
});

app.configure('production', function(){
    var env = JSON.parse(process.env.VCAP_SERVICES);
    dbData = env['mongodb-1.8'][0].credentials;
});

var generate_mongo_url = function(obj){
    obj.hostname = (obj.hostname || 'localhost');
    obj.port = (obj.port || 27017);
    obj.db = (obj.db || 'test');
    if(obj.username && obj.password){
        return "mongodb://" + obj.username + ":" + obj.password + "@" + obj.hostname + ":" + obj.port + "/" + obj.db;
    }else{
        return "mongodb://" + obj.hostname + ":" + obj.port + "/" + obj.db;
    }
};

var mongourl = generate_mongo_url(dbData);

// var record_visit = function(req, res){
//     /* Connect to the DB and auth */
//     require('mongodb').connect(mongourl, function(err, conn){
//         conn.collection('ips', function(err, coll){
//             /* Simple object to insert: ip address and date */
//             object_to_insert = { 'ip': req.connection.remoteAddress, 'ts': new Date() };
//             /* Insert the object then print in response */
//             /* Note the _id has been created */
//             coll.insert( object_to_insert, {safe:true}, function(err){
//                 res.writeHead(200, {'Content-Type': 'text/plain'});
//                 res.write(JSON.stringify(object_to_insert));
//                 res.end('\n');
//             });
//         });
//     });
// };

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


app.get('/', function(req, res){
    MongoClient.connect(mongourl, function(err, db){
    //     if(err) throw err;
    // routes.index(req, res, db);
        routes.index(req, res);
    });
});
//app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});
