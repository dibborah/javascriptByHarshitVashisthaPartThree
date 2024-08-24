// promise.resolve 
// promise chaining

// const myPromise = Promise.resolve(5);

// myPromise.then((response) => {
//     console.log(response);
// })

// Promise.resolve(5).then((response) => {
//     console.log(response);
// });

// then() => then() method always returns a promise
// Iska fyda kya hain, ki ye hamesa ek promise return karta hain

// Isse hum Promise ki chain create kar skte hain

// Example of promise chain 

function myPromise() {
    return new Promise((resolve) => {
        resolve('foo');
    });
};

myPromise()
    .then((value) => {
        console.log(value);
        value += 'bar';
        // console.log(value);
        // return value;

        // return undefined // Not this way when nothing is returned
        // return Promise.resolve(undefined);

        // internally this below line is happening
        return Promise.resolve(value); // internally this is happening

    }).then((newValue) => {
        console.log(newValue);
        newValue += 'baaz';
        return newValue;
    }).then((newValue2) => {
        console.log(newValue2);
    });

// then() method cannot be used with strings or other data types 
// then() method can only be used with promises

// 'harshit'.then((value) => {
//     console.log(value)
// });
