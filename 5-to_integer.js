const {argv} = require('node:process');

if (argv[2] == undefined){
    console.log("Not a number")
}
else if (typeof(argv[2]) == Number){
    console.log(`My number: ${Math.floor(argv[2])}`)
}
else{
    console.log(`My number: ${parseInt(argv[2])}`)
}