var express = require('express');
var fs = require('fs')
var app = express()
var port = 8080

app.get('/',function(req,res){
    res.send(`<h1>Welcome to the express server</h1>`)
})
app.get('/getMovies',function(req,res){
    fs.readFile('./data/db.json',function(err,result){
        if(err){
            console.log(err)
        }else{
            res.send(JSON.parse(result))
        }
    })
})

app.listen(port,function(err){
    if(err){
        console.log(err)
    }else{
        console.log('Server is running at -',port)
    }
})