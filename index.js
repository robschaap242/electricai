var connect = require('connect');
var http = require('http');
var app = connect();

// routes
var testRoutes = require('./routes');
app.use('/connect/', testRoutes);


http.createServer(app).listen(5000);