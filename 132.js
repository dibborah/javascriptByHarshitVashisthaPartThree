// understand callbacks

// callbacks are mostly used in asynchronous programming 

// using callbacks in synchronous programming

// Normal callbacks in general(simple)
// Asynchronous programming callback

// function myFunc(callback) {
//     console.log('Function is doing some task 1');
//     callback();
// };

// function myFunc2() {
//     console.log('Function is doing some task 2');
// };

// 1st way // without callback
// myFunc()
// myFunc2();

// 2nd way // using callback
// myFunc(myFunc2);

// 3rd similar to 2nd way but using arrow function and passing fc directly

// myFunc(() => {
//     console.log('Function is doing some task 2');
// });

const getTwoNumbersAndAdd = (number1, number2, onSuccess, onFailure) => {
    // console.log(number1, number2);
    // slight only number type error handling
    if (typeof number1 === 'number' && typeof number2 === 'number') {
        onSuccess(number1, number2);
    } else {
        onFailure();
    }
};

// const addTwoNumbers = (number1, number2) => {
//     console.log(number1 + number2);
// }

// without callback
// getTwoNumbers(4, 6);
// addTwoNumbers(4, 6);

// with callback
getTwoNumbersAndAdd(4, '6',
    (number1, number2) => {
        console.log(number1 + number2)
    },
    () => {
        console.log('Wrong data type');
    });