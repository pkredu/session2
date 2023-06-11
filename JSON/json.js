var fs = require('fs')
const dataObject = {
    title: 'Harry Potter',
    author: 'jk rowling'
}

//console.log(dataObject.title)

const seriesDataObject = JSON.stringify(dataObject);
//console.log(seriesDataObject)
const convertedData = JSON.parse(seriesDataObject);
//console.log(convertedData);

// fs.writeFile('new.json',seriesDataObject,function(err){
//     if(err){
//         console.log(err)
//     }else{
//         console.log('json added')
//     }
// })
fs.readFile('new.json',function(err,data){
    if(err){
        console.log(err)
    }else{
        console.log(JSON.parse(data))
    } 
})