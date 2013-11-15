/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var players = require('./routes/players');
var items = require('./routes/items');
var http = require('http');
var path = require('path');
var writer = require('./lib/middleware/writer');


var app = express();
var server;

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
} else if ('dist' == app.get('env')) {
  app.use(function(req, res, next) {

    var _send = res.send;

    res.send = function() {

      _send.apply(res, arguments);
      writer(req, arguments[0]);

    };

    next();

  });
}


//
app.get('/', routes.index);
app.get('/users', user.list);
app.get('/items/:id', items.item);
app.get('/players', players.index);
app.get('/players/:name', players.player);

server = http.createServer(app);

server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
