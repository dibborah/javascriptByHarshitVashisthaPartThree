// callbacks , callback hell, pyramid of doom
// asynchronous programming

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

// callback hell
// setTimeout(() => {
//     heading1.textContent = 'One';
//     heading1.style.color = 'red';
//     setTimeout(() => {
//         heading2.textContent = 'Two';
//         heading2.style.color = 'violet';
//         setTimeout(() => {
//             heading3.textContent = 'Three';
//             heading3.style.color = 'Yellow';
//             setTimeout(() => {
//                 heading4.textContent = 'Four';
//                 heading4.style.color = 'blue';
//                 setTimeout(() => {
//                     heading5.textContent = 'Five';
//                     heading5.style.color = 'green';
//                     setTimeout(() => {
//                         heading6.textContent = 'Six';
//                         heading6.style.color = 'orange';
//                         setTimeout(() => {
//                             heading7.textContent = 'Seven';
//                             heading7.style.color = 'pink';
//                             setTimeout(() => {
//                                 heading8.textContent = 'Eight';
//                                 heading8.style.color = 'purple';
//                                 setTimeout(() => {
//                                     heading9.textContent = 'Nine';
//                                     heading9.style.color = 'brown';
//                                     setTimeout(() => {
//                                         heading10.textContent = 'Ten';
//                                         heading10.style.color = 'cyan';
//                                     }, 1000);
//                                 }, 1000);
//                             }, 1000);
//                         }, 1000);
//                     }, 3000);
//                 }, 2000);
//             }, 1000);
//         }, 2000);
//     }, 2000);
// }, 1000);

// using a function

const changeText = (element, text, color, time, onSuccessCallback, onFailureCallback) => {
    setTimeout(() => {
        if (element) {
            element.textContent = text;
            element.style.color = color
            if (onSuccessCallback) {
                onSuccessCallback();
            }
        } else {
            onFailureCallback();
        }
    }, time);
};

// callback hell by creating an external function

// changeText(heading1, 'One', 'red', 1000, () => {
//     changeText(heading2, 'Two', 'blue', 1000, () => {
//         changeText(heading3, 'Three', 'green', 1000, () => {
//             changeText(heading4, 'Four', 'violet', 1000, () => {
//                 changeText(heading5, 'Five', 'purple', 1000, () => {
//                     changeText(heading6, 'Six', 'cyan', 1000, () => {
//                         changeText(heading7, 'Seven', 'orange', 1000, () => {
//                             changeText(heading8, 'Eight', 'yellow', 1000, () => {
//                                 changeText(heading9, 'Nine', 'brown', 1000, () => {
//                                     changeText(heading10, 'Ten', 'pink', 1000)
//                                 })
//                             })
//                         })
//                     })
//                 })
//             })
//         })
//     })
// }, () => {
//     console.log('Element doesnot exist');
// });


// This is a callback hell and this particular situational code structure is called : 
// "pyramid of doom" // created using two callbacks
changeText(heading1, 'One', 'red', 1000, () => {
    changeText(heading2, 'Two', 'green', 1000, () => {
        changeText(heading3, 'Three', 'blue', 1000, () => {
            changeText(heading4, 'Four', 'purple', 1000, () => {
                changeText(heading5, 'Five', 'violet', 1000, () => {
                    changeText(heading6, 'Six', 'orange', 1000, () => {
                        changeText(heading7, 'Seven', 'cyan', 1000, () => {
                            changeText(heading8, 'Eight', 'brown', 1000, () => {
                                changeText(heading9, 'Nine', 'pink', 1000, () => {
                                    changeText(heading10, 'Ten', 'indigo', 1000, () => {
                                    }, () => {console.log('heading10 does not exist');})
                                }, () => {console.log('heading9 does not exist');})
                            }, () => {console.log('heading8 does not exist');})
                        }, () => {console.log('heading7 does not exist');})
                    }, () => {console.log('heading6 does not exist');})
                }, () => {console.log('heading5 does not exist');})
            }, () => {console.log('heading4 does not exist');})
        }, () => {console.log('heading3 does not exist');})
    }, () => {console.log('heading2 does not exist');})
}, () => {console.log('heading1 does not exist');})
