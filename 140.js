const URL = 'https://jsonplaceholder.typicode.com/posts';

const xhr = new XMLHttpRequest();


// step 1 : use the open() method provided by xhr
xhr.open('GET', URL);// ye sab kam browser background main karega

// onreadystatechange tab chalega jab meri readyState change hogi
// xhr.onreadystatechange = function() {// onreadystatechange method call hoga hi hoga jabi state ya readyState change hogi
//     console.log(xhr)
//     if(xhr.readyState === 4){
//         const response = xhr.response
//         const data = JSON.parse(response)
//         console.log(typeof data);
//     }
//     // console.log('r',xhr.readyState);// This is function inside onready state change is like a loop
// }

// But onload bas tabhi chalta hain jab meri readyState 4 hogi, particularly 4
xhr.onload = () => {
    // console.log(JSON.parse(xhr.response));
    // console.log(xhr.readyState);
};

// step three : use send() method provided by xhr
xhr.send();




