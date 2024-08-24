// synchronous programming vs asynchronous programming
// synchronous programming

// JS is a synchronous single threaded programming language

// A synchronous code example
// console.log('script start');

// for(let i = 0; i < 10000; i++){// This for loop is acting like a blocking code for the execution of the next lines of code 
//     console.log('inside for loop');
// };

// console.log('script end');


// setTimeout

console.log('script start');

// function hello() {
//     console.log('hello world!!!');
// };

// setTimeout(hello, 1000);

const id = setTimeout(function hello() {// This setTimeout is not a blocking code// This is a non-blocking asynchronous code// executed in the background by the browser
    console.log('inside setTimeout!!!');
}, 0);// Remember this 1000ms is a minimum time delay
// matlab kam se kam 1000ms lagega. Jyada jitna v lag skta hain depending upon other synchronous blocking code

// This 1000ms in the setTimeout, the browser is counting


for (let i = 1; i < 100; i++) {
    console.log("...");
}

console.log('script end');
clearTimeout(id);// This fc removes setTimeout callback from the callback queue


