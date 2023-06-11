var fs = require('fs');
// fs.stat('myText.txt',function(err,stats){
//     if(err){
//         console.log(err)
//     }else{
//         console.log(stats.isFile());
//         console.log(stats.isDirectory());
//         console.log(stats);
//     }
// })
// fs.writeFile('myText.txt','adding new data',function(err){
//     if(err){
//         console.log(err)
//     }else{
//         console.log('data written')
//     }
// })

// fs.readFile('myText.txt',function(err,data){
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data.toString())
//     }
// })
// fs.rename('myText.txt','newFile.txt',function(err){
//     if(err){
//         console.log(err)
//     }else{
//         console.log('file have been renamed')
//     }
// })

// fs.appendFile('myText.txt','\nthis should not delete old data',function(err){
//     if(err){
//         console.log(err)
//     }else{
//         console.log('data written')
//     }
// })

fs.unlink('newFile.txt',function(err){
    if(err){
        console.log(err)
    }else{
        console.log('file have been deleted')
    }
})