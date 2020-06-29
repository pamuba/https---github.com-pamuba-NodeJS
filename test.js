// var myLog = require('./log')

// // myLog.error("Some Error");

// // console.log(myLog)

// // console.log(myLog.name)

// myLog.log("Prince")

var fs = require('fs')
//Async
fs.readFile('data.txt', function(err, data){
    if(err){
        return console.log(err)
    }
    else
    {
        console.log(data.toString())
    }
})