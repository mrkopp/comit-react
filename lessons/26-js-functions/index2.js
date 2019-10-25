function showEvenNumbers(max) {
    for (let i = 0; i <= max; i++) {
        if (i % 2 === 0) {
            console.log(`${i} is even`);
        }
    }
}

showEvenNumbers(50);

function showUser(name, age, phoneNumber, street, postalCode, married) {
    console.log("Name", name);
    console.log('Age :', age );
    console.log('Phone :', phoneNumber);
    console.log('street :', street);
    console.log('postal code: ', postalCode);
    console.log('married :', married);
}

showUser('Mitch', 32, 3062502248, 'fake street', 's7j3w3', true)


const showEvenNumbers2 = function() {
    for (let i = 0; i <= 50; i++) {
        if (i % 2 === 0) {
            console.log(`${i} is even`);
        }
    }
}

showEvenNumbers2();
showEvenNumbers2();
showEvenNumbers2();
showEvenNumbers2();
showEvenNumbers2();

function fibonacci(max) {
    let previous = 0;
    console.log(previous);

    let current = 1;
    console.log(current);

    let next = previous + current;
   
    for (let i = 0; i < max; i++) {
        console.log(next);
        previous = current;
        current = next;
        next = previous + current;
    }
}

fibonacci(20); // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

const showName = function() {
    console.log('=========');
    console.log('= Ozzie =')
    console.log('=========');
}

showName();