const { argv } = require('node:process');

if ( argv[1] ==undefined ){
    console.log("No argument")
}
else{
    console.log(argv[2])
}

// console.log(argv[2])