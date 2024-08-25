// XHR using promises

// A promise is always resolves with a value (The value may be sometimes 'undefined' but always resolves with a value)

const getPosts = (method, URL) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', URL);
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                const response = xhr.response;
                const data = JSON.parse(response);
                resolve(data);
            } else {
                reject('Something went wrong');
            }
        };
        xhr.onerror = () => {
            console.log('Network error');
        }
        xhr.send();
    })
};

// Non - refactored code( Not using the powers of promises)
// getPosts()
//     .then((data) => {
//         console.log(data);
//         return data;
//     }).then((data) => {
//         // This then block is something I have doubt off. It could be refactored
//         const xhr = new XMLHttpRequest();
//         xhr.open('GET', `${URL}/4`);
//         xhr.onload = () => {
//             if (xhr.status >= 200 && xhr.status < 300) {
//                 const response = xhr.response;
//                 const data = JSON.parse(response);
//                 console.log(data);
//             } else {
//                 console.log('Something went wrong');
//             }
//         };
//         xhr.onerror = () => {
//             console.log('Network error');
//         }
//         xhr.send();
//     }).catch((error) => {
//         console.log(error);
//     });

// Refactored code(using the powers of promises)

const url1 = 'https://jsonplaceholder.typicode.com/posts';

getPosts('GET', url1).then((data) => {
    console.log(data);
    return data;
})
.then((data) => {
    const id = data[3]?.id;
    return id;    
})
.then((id) => {
    const url2 = `${url1}/${id}`;
    return getPosts('GET', url2);
})
.then((data) => {
    console.log(data);
})
.catch(error => {
    console.log(error);
})
