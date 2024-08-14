
// My solution 
// const allH1Elements = document.querySelectorAll('h1');

// const firstH1 = allH1Elements[0];
// const secondH1 = allH1Elements[1];
// const thirdH1 = allH1Elements[2];

// allH1Elements.forEach((h1Element, index) => {
//     setTimeout(() => {
//         h1Element.textContent = h1Element.className;
//     }, 1000 * (index + 1));
// });

// setTimeout(() => {
//     firstH1.textContent = firstH1.className;
// }, 1000);

// setTimeout(() => {
//     secondH1.textContent = secondH1.className;
// }, 2000);

// setTimeout(() => {
//     thirdH1.textContent = thirdH1.className;
// }, 3000);

// Lesson Tasks: 
const heading1 = document.querySelector('.headling1');
const heading2 = document.querySelector('.headling2');
const heading3 = document.querySelector('.headling3');
const heading4 = document.querySelector('.headling4');
const heading5 = document.querySelector('.headling5');
const heading6 = document.querySelector('.headling6');
const heading7 = document.querySelector('.headling7');

// text delay color
// one 1s violet
// two 2s purple
// three 2s red
// four 1s pink
// five 2s green
// six 3s blue
// seven 1s brown

// setTimeout(() => {
//     heading1.textContent = 'One';
//     heading1.style.color = 'violet';
//     setTimeout(() => {
//         heading2.textContent = 'Two';
//         heading2.style.color = 'purple';
//         setTimeout(() => {
//             heading3.textContent = 'Three';
//             heading3.style.color = 'red';
//             setTimeout(() => {
//                 heading4.textContent = 'Four';
//                 heading4.style.color = 'pink';
//                 setTimeout(() => {
//                     heading5.textContent = 'Five';
//                     heading5.style.color = 'green';
//                 }, 2000);
//             }, 1000);
//         }, 2000);
//     }, 2000);
// }, 1000);


const changeText = (element, time, color, text, onSuccess) => {
    setTimeout(() => {
        if(element) {
            element.style.color = color;
            element.textContent = text;
        }
        if(onSuccess) {
            onSuccess();
        }
    }, time);
};

setTimeout(changeText(heading1, 1000, 'violet', 'One', () => {
    changeText(heading2,2000, 'purple', 'Two', () => {
        changeText(heading3, 2000, 'red', 'Three',() => {
            changeText(heading4, 1000, 'pink', 'Four', () => {
                changeText(heading5, 2000, 'green', 'Five', () => {
                    changeText(heading6, 3000, 'blue', 'Six', () => {
                        changeText(heading7, 1000, 'brown', 'Seven');
                    })
                })
            })
        })
    })
}));


// This is clearly wrong as it doesnot follow one fc/callback after another
// setTimeout(changeText(heading1, 1000, 'violet', 'One'));
// setTimeout(changeText(heading2, 2000, 'purple', 'Two'));
// setTimeout(changeText(heading3, 2000, 'red', 'Three'));
// setTimeout(changeText(heading4, 1000, 'pink', 'Four'));
// setTimeout(changeText(heading5, 2000, 'green', 'Five'));
// setTimeout(changeText(heading6, 3000, 'blue', 'Six'));
// setTimeout(changeText(heading7, 1000, 'brown', 'Seven'));