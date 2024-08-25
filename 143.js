// fetch() API

// Ek promise hamesa ek value leke resolve hota hain

const url1 = 'https://jsonplaceholder.typicode.com/posts';

// fetch(url1).then((response) => {
//     if (response.ok) {
//         return response.json();
//     } else {
//         throw new Error('Something went Wrong');
//         // console.log('Something went Wrong');
//     }
// }).then((data) => {
//     console.log(data);
//     const id = data[3]?.id;
//     return id;
// }).then((id) => {
//     fetch(`${url1}/${id}`)
//         .then((response) => {
//             if (response.ok) {
//                 return response.json();
//             }else {
//                 throw new Error('Something went Wrong');
//             }
//         }).then((data) => {
//             console.log(data);
//         }).catch((error) => {console.log(error)});
// }).catch((error) => {
//     console.log(error);
// });

fetch(url1, {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
}).then((response) => {
    if (response.ok) {
        return response.json();
    } else {
        throw new Error('Something went Wrong');
        // console.log('Something went wrongkkkk')
    }
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log('inside catch');
    console.log(error);
});
