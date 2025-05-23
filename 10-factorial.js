const {argv} = require('node:process');



function factorial(n) {
    if (n < 0) {
      throw new Error("Factorial is not defined for negative numbers");
    } else if (n === 0 || n === 1) {
      return 1;
    } else {
      let result = 1;
      for (let i = 2; i <= n; i++) {
        result *= i;
      }
      return result;
    }
  }


if (argv[2] === undefined || isNaN(parseInt(argv[2]))) {
console.log(1);
} else {
try {
    const num = parseInt(argv[2]);
    console.log(factorial(num));
} catch (error) {
    console.log(error.message);
}
}
