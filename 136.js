// promise && setTimeout

// I want to resolve / reject promise after 2 seconds

function ricePromise() {
    const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];
    console.log('inside promise')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (bucket.includes('vegetables') && bucket.includes('salt') && bucket.includes('rice')) {
                resolve({ value: 'Fried Rice' });
            } else {
                reject('Something went wrong!!!');
            }
        }, 1000);
    });
};

ricePromise().then((response) => {
    console.log(response);
}).catch((data) => {
    console.log(data);
})