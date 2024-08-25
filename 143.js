// fetch() API

const url1 = 'https://jsonplaceholder.typicode.com/posts';

fetch(url1).then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
    const id = data[3]?.id;
    return id;
}).then((id) => {
    fetch(`${url1}/${id}`).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
    });
});