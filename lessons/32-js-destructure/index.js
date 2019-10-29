const favFruits = prompt("Please enter you top 5 favorite fruits (in order), separated by a comma: ");

const arrFruits = favFruits.split(', ');

console.log(arrFruits);

const [firstFruit, secondFruit, thirdFruit] = arrFruits;
const [, , , ...restOfFruit] = arrFruits;

alert(`Your top 3 favorite fruits are: ${firstFruit}, ${secondFruit}, and ${thirdFruit}`);

alert(`You should love these fruits more: ${restOfFruit}`);

