const readline = require('readline')

const reader = readline.creareInterface({
    input: process.stdin
    output: process.stdout
})

reader.question("What is your name? ", function(answer){
    console.log('Hi, ${answer}');
})

reader.question(
    "Enter a number to check if it is even or odd: ",
    function(number) {
    if (number % 2 === 0) {
        console.log('the nubmer ${number} is even');
    } else {
        console.log('the number ${number} is odd');
    }
  }
);