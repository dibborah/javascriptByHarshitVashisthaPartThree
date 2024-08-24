// Intro to promises:

// Promise are made using Class contructor fc 
// So promises are Objects

// Simple defination: Future value

// Promise : JS ka feature nahi hain
// Promise: Browser ka feature hain

// This is the reason Promise are asynchronous in nature

// I.promise: initially: 
// 1. status: pending. 2. value: undefined

// 1st case: When success
// II.promises: after execution(afterwards)
// 1. status: fullfilled. 2. value: Some value

// 2nd case: When failure(error)
// II.promises: after execution(afterwards)
// 1. status: rejected. 2. value: any Error value

const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];

// 1st part: Producing a promise

// creating or constructing a promise
// The callback fc inside the promise with resolve and reject is called "EXECUTOR FUNCTION"

const myFriedRicePromise = new Promise((resolve, reject) => {// The arguement here resolve and reject are methods or functions here which we will call
    // Promise here is a class or a constructor fc
    if (bucket.includes('vegetables') && bucket.includes('salt') && bucket.includes('rice')) {
        resolve({ value: 'Fried Rice' });// We can passing any value // Here we passing a string value
        // resolve('Fried Rice');
    } else {
        // reject(new Error('Something went wrong!!!'));
        // reject([]);
        reject('Something went wrong!!!');
    }
});

// console.log(typeof myFriedRicePromise);// A promise is an OBJECT in JS
console.log(myFriedRicePromise);// A promise is an OBJECT in JS

// console.log(myFriedRicePromise); // A promise is produced


// 2nd part : Consuming a promise
// how to consume : Browser consumes the promise not JS engine

// .then() is a method which can takes two callback as an arguement
// 1st: To see when our promise gets resolved or is a success
// 2nd: To see when our promise gets rejected or fails
// Note: The second arguement of then() is something we do not use this days.
// Since we have other methods like catch() to catch errors
// But the 2nd arugement does exits

// passing two arguments in .then() method
// myFriedRicePromise.then(
//     // jab promise resolve hoga
//     (response) => {
//         console.log(response);
//         return response
//     // Jab promise reject hoga
//     }, (error) => {
//         console.log(error);
//     });

// setInterval(() => {
//     console.log('setInterval called');
// }, 0);

setTimeout(() => {
    console.log('setTimeout called');
}, 0);

// setTimeout time delay greater > 0 is managed by callback queue
// But setTimeout time dalay === 0 is managed by microtask queue as the Promises are

// passing one arguement in .then() method()
myFriedRicePromise.then( // then block when promise is resolved
    // jab promise resolve hoga
    (response) => {
        console.log('Promised value', response);
        return response
    }).catch((error) => { // catch block when promise is rejected
        console.log(error);
    });

for (let i = 0; i < 100; i++) {
    console.log(Math.random());
};

console.log('script end');
// Promise are asynchronous since Promises are handled by the Browser
// It is a webAPI


// Note microtask queue priority is greater than callback queue
// priority: 
// microtask Queue > callback queue

// Event loop managed by the BROWSER
// MICROTASK queue and CALLBACK queue : Managed by the JS Engine
