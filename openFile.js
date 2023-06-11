var fs = require('fs');

fs.open('myText.txt','r+',function(err,fd){
    if(err){
        console.log(err)
    }else{
        console.log('file opened successfully!');
        console.log(fd);
        fs.readFile(fd,function(err,data){
            if(err){
                console.log(err);
            }else{
                console.log(data.toString())
            }
        })
    }
})