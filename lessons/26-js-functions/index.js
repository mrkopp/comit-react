function printEvenNum(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

printEvenNum(100);

function showUser() {
    let name = "Mitch";
    console.log(name);
    let age = "31";
    console.log(age);
    let phone = "306-250-2248";
    console.log(phone);
    let street = "103 Whiteshore Crescent"
    console.log(street);
    let postal = "S7J 3W3";
    console.log(postal);
    let married = true;
    console.log(married);
}

showUser();

let evenNumbers = printEvenNum(100);

function fibonacci(num){
    // 0 1 1 2 3 5 8
    let last = 0, next = 1, temp;
    for (let i = 0; i < num; i++) {
        temp = next;
        next = next + last;
        last = temp;
        console.log(next);
    }
  }

  fibonacci(10);