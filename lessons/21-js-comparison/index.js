alert("Enter two numbers to see if the first is greater than the second");

const firstNumber = prompt("Please enter your first number.");
const secondNumber = prompt("Please enter your second number.");


const accurate = confirm(firstNumber > secondNumber);

console.log("Were we accurate?", accurate);

