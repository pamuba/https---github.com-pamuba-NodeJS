var http = require('http')
const { read } = require('fs')

var server = http.createServer(function(req, res){
//     res.json("Welcome to my Site");
//     res.end();

    if(req.url == '/'){
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write('<html><body><h1>THIS IS HOEM PAGE</h1></body></html>')
        res.end();
    }
    
    if(req.url == '/student'){
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write('<html><body><h1>THIS IS STUDENT PAGE</h1></body></html>')
        res.end();
    }

    if(req.url == '/teacher'){
        res.writeHead(200, {'Content-Type':'text/html'})
        // res.write('<html><body><h1>THIS IS TEACHER PAGE</h1></body></html>')
        res.write(JSON.stringify({message:"Hello World"}))
        res.end();
    }
    else{
        res.end('Invalid Request!')
    }
})

server.listen(8080)
console.log("Server Started")