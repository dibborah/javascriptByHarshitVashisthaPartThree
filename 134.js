// Intro to promises:

// Simple defination: Future value

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
    if (bucket.includes('vegetables') && bucket.includes('salt') && bucket.includes('rice')){
        resolve('Fried Rice');// We can passing any value // Here we passing a string value
    }else {
        reject('Something went wrong!!!');
    }
});

// console.log(myFriedRicePromise); // A promise is produced


// 2nd part : Consuming a promise

