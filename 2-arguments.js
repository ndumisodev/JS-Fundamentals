const { argv } = require('node:process');

// print process.argv
// argv.forEach((val, index) => {
//   console.log(`${index}: ${val}`);

// });

// console.log(argv)

if (argv.length == 2){
    console.log("No argument")
}
else if (argv.length == 3){
    console.log("Argument found")
}
else {
    console.log("Arguments found")
}
