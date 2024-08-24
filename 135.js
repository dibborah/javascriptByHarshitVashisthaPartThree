// functions returning promise

function ricePromise() {
    const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];
    return new Promise((resolve, reject) => {
        if (bucket.includes('vegetables') && bucket.includes('salt') && bucket.includes('rice')) {
            resolve({ value: 'Fried Rice' });
        } else {
            reject('Something went wrong!!!');
        }
    });
};

ricePromise().then(
    (response) => {
        console.log(response);
    }).catch((error) => {
        console.log(error);
    });