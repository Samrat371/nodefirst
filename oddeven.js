// program to check if the number is even or odd
// take input from the user
const prompt = require('prompt-sync')();
const number = prompt("Enter a number: ");

if(number==0){
    console.log("The number is zero")
}
//check if the number is even
else if(number % 2 == 0) {
    console.log("The number is even.");
}

// if the number is odd
else {
    console.log("The number is odd.");
}
 
