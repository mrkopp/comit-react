let age = 31;
let firstName = "Mitch";
let courseCompleted = false;
let finalScore = null;
let winningNumbers;

console.log("Age: ", age);
console.log("First Name: ", firstName);
console.log("Course Completed: ", courseCompleted);
console.log("Final Score: ", finalScore);
console.log("Winning Numbers: ", winningNumbers);

age = String(age);
firstName = Number(firstName);
courseCompleted = Number(courseCompleted);
finalScore = Boolean(finalScore);
winningNumbers = String(winningNumbers);

console.log("Converted Age: ", age);
console.log("Converted First Name: ", firstName);
console.log("Converted Course Completed: ", courseCompleted);
console.log("Converted Final Score: ", finalScore);
console.log("Converted Winning Numbers: ", winningNumbers);

