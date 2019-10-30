const regNums = [1, 2, 3, 4, 5];

let squareNums = regNums.map((num) => Math.pow(num, 2));

console.log(regNums);
console.log(squareNums);


const regNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNums = regNums.filter(num => num % 2 === 0);
let oddNums = regNums.filter(num => num % 2 !== 0);

console.log(`Reg Numnbers: ${regNums}`);
console.log(`Even Numbers: ${evenNums}`);
console.log(`Odd Numbers: ${oddNums}`);

let people = [
    {
        name: "Mitch",
        age: 31,
        city: "Saskatoon",
    },
    {
        name: "Doug",
        age: 28,
        city: "Saskatoon",
    },
    {
        name: "Greg",
        age: 39,
        city: "Martensville",
    },
    {
        name: "Alfred",
        age: 40,
        city: "Langham",
    },
    {
        name: "Roland",
        age: 19,
        city: "Saskatoon",
    }
];

console.log(people);

let overAge30 = people.filter(num => num.age > 30);

console.log(overAge30);

let under20Toon = people.filter(x => x.age < 20 && x.city === "Saskatoon");

console.log(under20Toon);

let ageArr = people.map(x => x.age);

console.log(ageArr);

let stripVowels = str => str.replace(/[aeiou]/gi, '');

console.log(stripVowels("Hello there my friend"));
console.log(stripVowels("Goodbye my friend"));
console.log(stripVowels("Manchester city is the best"));




