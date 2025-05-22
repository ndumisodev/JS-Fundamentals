const {argv} = require('node:process');

if (argv[2] == undefined){
    console.log("Not a number")
}
else if (isNaN(parseInt(argv[2]))) {
    console.log("Not a number");
  }
else if (typeof(parseInt(argv[2])) == "number" ){
    console.log(`My number: ${Math.floor(argv[2])}`)
}
// else if (typeof(argv[2]) == Number){
// }
// else if (typeof(parseInt(argv[2])) == Number){
//     console.log(`My number: ${parseInt(argv[2])}`)
// }
else{
    console.log("Not a number")
}


// console.log(typeof(parseInt(argv[2])))