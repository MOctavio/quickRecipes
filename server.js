var express        = require('express');
var app            = express();

var port = process.env.PORT || 8081; // set our port
var staticdir = process.env.NODE_ENV === 'production' ? 'dist' : 'temp'; // get static files dir

app.use(express.static(__dirname + '/' + staticdir)); // set the static files location /public/img will be /img for users

// routes ==================================================
require('./devServer/routes')(app); // configure our routes

// start app ===============================================
app.listen(port);                   // startup our app at http://localhost:8080
console.log('Starting sever on port ' + port);       // shoutout to the user
exports = module.exports = app;             // expose app
