// async await 

// BTS : async await uses .then() method
// But superficially syntax changes and simplifies
// Becomes more readable

console.log('script start');

const URL = 'https://jsonplaceholder.typicode.com/posts';

// fetch(URL).then((response) => {
//     return response.json();
// }).then(data => {
//     console.log(data);
// }).catch((error) => {
//     console.log(error);
// });

// async ek function main likhne ke baad wo function badal chuka hain
// wo function ek normal function nahi raha
// Wo function ab hamesa return main ek promise dega

// doing the same thing using async await in arrow function
// const getPosts = async () => {
//     const response = await fetch(URL);
//     const data = await response.json();   
//     console.log(data);
// };

// async ek function main likhte hi pura kam background main hoga
// ye duty aab browser ki ho gayi hain // JS engine ki nahi rahi

// doing the same thing using async await in normal function
async function getPosts() {
    const response = await fetch(URL);
    if(!response.ok) {
        throw new Error ('Something went wrong');
    };
    const data = await response.json();   
    return data; // yaha data nahi return hua
    // Is function ne ek PROMISE return kar dya data value ke sath
};

// Hum kya kar rahe hain ???
// Hum promises ko consume kar rahe hain!!!

getPosts().then((data) => { // then() ek callback lega
    console.log(data); // ya wo promise data value ke sath resolve hui to humme data mila
}).catch((error) => {
    console.log('inside catch');
    console.log(error);
}); 


console.log('script end');




