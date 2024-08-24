// callback hell to flat code

const heading1 = document.querySelector('.heading1');
const heading2 = document.querySelector('.heading2');
const heading3 = document.querySelector('.heading3');
const heading4 = document.querySelector('.heading4');
const heading5 = document.querySelector('.heading5');
const heading6 = document.querySelector('.heading6');
const heading7 = document.querySelector('.heading7');
const heading8 = document.querySelector('.heading8');
const heading9 = document.querySelector('.heading9');
const heading10 = document.querySelector('.heading10');


// const changeText = (element, text, color, time, onSuccessCallback, onFailureCallback) => {
//     setTimeout(() => {
//         if (element) {
//             element.textContent = text;
//             element.style.color = color
//             if (onSuccessCallback) {
//                 onSuccessCallback();
//             }
//         } else {
//             onFailureCallback();
//         }
//     }, time);
// };


// "pyramid of doom" // created using two callbacks

// changeText(heading1, 'One', 'red', 1000, () => {
//     changeText(heading2, 'Two', 'green', 1000, () => {
//         changeText(heading3, 'Three', 'blue', 1000, () => {
//             changeText(heading4, 'Four', 'purple', 1000, () => {
//                 changeText(heading5, 'Five', 'violet', 1000, () => {
//                     changeText(heading6, 'Six', 'orange', 1000, () => {
//                         changeText(heading7, 'Seven', 'cyan', 1000, () => {
//                             changeText(heading8, 'Eight', 'brown', 1000, () => {
//                                 changeText(heading9, 'Nine', 'pink', 1000, () => {
//                                     changeText(heading10, 'Ten', 'indigo', 1000, () => {
//                                     }, () => {console.log('heading10 does not exist');})
//                                 }, () => {console.log('heading9 does not exist');})
//                             }, () => {console.log('heading8 does not exist');})
//                         }, () => {console.log('heading7 does not exist');})
//                     }, () => {console.log('heading6 does not exist');})
//                 }, () => {console.log('heading5 does not exist');})
//             }, () => {console.log('heading4 does not exist');})
//         }, () => {console.log('heading3 does not exist');})
//     }, () => {console.log('heading2 does not exist');})
// }, () => {console.log('heading1 does not exist');})

// Task: 
// Promisify the above callback hell pyramid of doom code 

const changeTextPromise = (element, text, color, time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (element) {
                element.textContent = text;
                element.style.color = color
                resolve('Successfully resolved');
            } else {
                reject('Element not found!!!');
            }
        }, time);
    })
};

// This is flat code not like nested hell // Easily readable, maintainable and understandable

changeTextPromise(heading1, 'One', 'red', 1000)
  .then(() => {// Remember: then() always takes success (resolve()) callback
    return changeTextPromise(heading2, 'Two', 'indigo', 1000);// I understood w/o return promise chaining does not happens
}).then((data) => {
    // console.log(data);
    return changeTextPromise(heading3, 'Three', 'blue', 1000);
}).then(() => {
    return changeTextPromise(heading4, 'Four', 'purple', 1000);
}).then(() => {
    return changeTextPromise(heading5, 'Five', 'violet', 1000);
}).then(() => {
    return changeTextPromise(heading6, 'Six', 'pink', 1000);
}).then(() => {
    return changeTextPromise(heading7, 'Seven', 'orange', 1000);
}).then(() => {
    return changeTextPromise(heading8, 'Eight', 'orangered', 1000);
}).then(() => {
    return changeTextPromise(heading9, 'Nine', 'cyan', 1000);
}).then(() => {
    return changeTextPromise(heading10, 'Ten', 'grey', 1000);
}).catch((error) => {// catch() takes error callback
    // console.log(error);
    alert(error);
});