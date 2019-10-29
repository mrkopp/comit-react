// function reverseNumber(numToReverse) {
//     const strNum = String(numToReverse);
    
//     let result = "";

//     for (let i = strNum.length - 1; i >=0; i--) {
//         result += strNum[i];
//     }
    
//     return Number(result);
// }

// // console.log(reverseNumber(12345)) // 54321


// function isPalindrome(word) {
//     let reversedWord = "";

//     for (let i = word.length - 1; i >=0; i--) {
//         reversedWord += word[i];
//     }

//     return word === reversedWord;

// }

// // console.log("output", isPalindrome("tacocat"));


// function isPrime(number) {
//     if (number === 0 || number === 1) {
//         return false;
//     }
//     for (let i = 2; i < number; i++) {
//         if (number % i === 0) {
//             return false;
//         }
//     }

//     return true;
// }

// console.log("Is 0 Prime: ", isPrime(0)); //false
// console.log("Is 10 Prime: ", isPrime(10)); //false
// console.log("Is 7 Prime: ", isPrime(7)); //true
// console.log("Is 2 Prime: ", isPrime(2)); //true
// console.log("is 1301 prime: ", isPrime(1301)); //true




// function divisible(num) {
// 	return !(num % 100)
// }

// function length(str) {
// 	return str.length;
// }

// length('Mitch');

// function matchHouses(step) {
//     const matchsticks = 6
// 	if (step = 1) {
// 		return 6
// 	} else if (step = 0) {
// 		return 0
//     } else {
// 		return ((step * matchsticks) - (step - 1))
//     }
// }
// matchHouses(6);

// let money = 1e-6;

// console.log(money);


const user = {
    username: 'oz',
    password: 'pass',
  };
  
  const { username, password } = user;
  
  console.log(username, password);