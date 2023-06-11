var fs  = require('fs');
var dataFromJSON = fs.readFileSync('new.json').toString()
console.log(dataFromJSON);

var dataObject = JSON.parse(dataFromJSON);

dataObject.title = 'new title';
console.log(dataObject)
fs.writeFileSync('new.json',JSON.stringify(dataObject));