//console.log(process.argv[2]);
// 2 + 3
var input1 = parseInt(process.argv[2]);
var operator = process.argv[3];
var input2 = parseInt(process.argv[4]);

var results;

if(operator == '+'){
    results = input1 + input2
}else if(operator == '-'){
    results = input1 - input2
}

console.log('result is : ',results);