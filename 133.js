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

// pyramid of doom

setTimeout(() => {
    heading1.textContent = 'One';
    heading1.style.color = 'red';
    setTimeout(() => {
        heading2.textContent = 'Two';
        heading2.style.color = 'violet';
        setTimeout(() => {
            heading3.textContent = 'Three';
            heading3.style.color = 'Yellow';
            setTimeout(() => {
                heading4.textContent = 'Four';
                heading4.style.color = 'blue';
                setTimeout(() => {
                    heading5.textContent = 'Five';
                    heading5.style.color = 'green';
                    setTimeout(() => {
                        heading6.textContent = 'Six';
                        heading6.style.color = 'orange';
                        setTimeout(() => {
                            heading7.textContent = 'Seven';
                            heading7.style.color = 'pink';
                            // setTimeout(() => {
                            //     heading8.textContent = 'Eight';
                            //     heading8.style.color = 'purple';
                            //     setTimeout(() => {
                            //         heading9.textContent = 'Nine';
                            //         heading9.style.color = 'brown';
                            //         setTimeout(() => {
                            //             heading10.textContent = 'Ten';
                            //             heading10.style.color = 'cyan';
                            //         }, 1000);
                            //     }, 1000);
                            // }, 1000);
                        }, 1000);
                    }, 3000);
                }, 2000);
            }, 1000);
        }, 2000);
    }, 2000);
}, 1000);
