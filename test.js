// var myLog = require('./log')

// // myLog.error("Some Error");

// // console.log(myLog)

// // console.log(myLog.name)

// myLog.log("Prince")

// var fs = require('fs')
//Async
// fs.readFile('data.txt', function(err, data){
//     if(err){
//         return console.log(err)
//     }
//     else
//     {
//         console.log(data.toString())
//     }
// })

// //sync 
// var data = fs.readFileSync('data.txt');
// console.log(data.toString())


//Admin

//Normal

// var fs = require('fs')
// fs.open('data.txt','r', function(err, fd){
//     if(err){console.log(err)}
//     else{
//         var buffer = new Buffer.alloc(1024);
//         fs.read(fd, buffer, 2, 1022, 5, function(err, bytes){
//             //Print
//             // console.log(buffer.slice(0, bytes).toString())
//             console.log(buffer)
//         })
//         fs.close(fd, function(err){
//             console.log(err)
//         })

//         ///fs.write
//         // fs.wr
//     }
// })


 var fs = require('fs')
// fs.writeFile('text.txt', "Hello World", function(err){
//     if(err){console.log(err)}
//     else{console.log("Data Written successfully")}
// })


fs.readFile('data.txt', 'utf-8', function(err, data){

})


