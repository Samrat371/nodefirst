// program to check if a number is prime or not

// take input from the user
const prompt = require('prompt-sync')();
const number = prompt("Enter a number:");

// check if number is equal to 1
if (number <=1) 
{
    console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (number > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) 
        {
            console.log(number+" is not prime");
            break;
        }
        else {
            console.log(number+" is a prime number");
    } 
    } 
    }
    else{
        console.log("invalid input");
    }
