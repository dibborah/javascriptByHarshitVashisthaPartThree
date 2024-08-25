// XHR practice and error handling

const URL = 'https://jsonplaceholder.typicode.com/posts';

const xhr = new XMLHttpRequest();// XMLHttpRequest is a class (constructor function)

// ----- 1st request -----
xhr.open('GET', URL);

xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
        const data = JSON.parse(xhr.response);
        console.log(data)
    }else {
        console.log('invalid request');
    }
};

xhr.onerror = () => {
    console.log('Network error');
}

xhr.send();

// ----- 2nd request ------

const xhr1 = new XMLHttpRequest();// XMLHttpRequest is a class (constructor function)

xhr1.open('GET', `${URL}/1`);

xhr1.onload = function() {
    if (xhr1.status >= 200 && xhr1.status < 300) {
        const data = JSON.parse(xhr1.response);
        console.log(data)
    }else {
        console.log('invalid request');
    }
};

xhr1.onerror = () => {
    console.log('Network error');
}
xhr1.send();