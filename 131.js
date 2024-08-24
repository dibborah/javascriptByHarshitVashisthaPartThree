// // setInterval

// console.log('script start');

// const clearId = setInterval(() => {
//     let total = 0;
//     // This for loop is delaying the setInterval code beyond the time we provide as arguement
//     for(let i = 0; i < 1000000000; i++){
//         total +=i;
//     }
//     console.log(total);
//     console.log(Math.random());
// }, 0);// donot blindly follow the time provided // The 0s is only the minimum time delay

// clearInterval(clearId);

// console.log('script end');


const body = document.body;
const button = document.querySelector('button')
const randomColorGenerator = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    const rgb = `rgb(${red}, ${green}, ${blue})`;
    return rgb;
}

const rgb = randomColorGenerator();

const intervalId = setInterval(() => {
    body.style.background = randomColorGenerator();
},1000);

button.addEventListener('click', () => {
    clearInterval(intervalId);
    button.textContent = body.style.background;
})


