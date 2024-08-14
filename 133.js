
const allH1Elements = document.querySelectorAll('h1');

const firstH1 = allH1Elements[0];
const secondH1 = allH1Elements[1];
const thirdH1 = allH1Elements[2];

allH1Elements.forEach((h1Element, index) => {
    setTimeout(() => {
        h1Element.textContent = h1Element.className;
    }, 1000 * (index + 1));
});

// setTimeout(() => {
//     firstH1.textContent = firstH1.className;
// }, 1000);

// setTimeout(() => {
//     secondH1.textContent = secondH1.className;
// }, 2000);

// setTimeout(() => {
//     thirdH1.textContent = thirdH1.className;
// }, 3000);