var http = require('http')

var server = http.createServer(function(req, res){
    res.write("Welcome to my Site");
    res.end();
})

server.listen(8080)