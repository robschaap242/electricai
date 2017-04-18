var finalhandler = require('finalhandler')
var http         = require('http')
var routes = require('./routes')

var server = http.createServer(function(req, res) {
    routes(req, res, finalhandler(req, res))
})

server.listen(5000)