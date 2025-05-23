const {argv} = require('node:process')

function add(a, b){
    return a + b;
}

if (argv.length < 4){
    console.log(NaN)
}
else{
    addition = add(parseInt(argv[2]), (parseInt(argv[3])))
    console.log(addition)
}