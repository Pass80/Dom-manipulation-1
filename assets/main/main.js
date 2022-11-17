let container = document.querySelector('.umwickeln');
let btn = document.querySelector('button');

console.log(container);
let num = 0;
const generateNumbers = () => {
    const newDiv = document.createElement('div');
    newDiv.textContent = num;
    if ((num + 10) % 10 === 0) {
        newDiv.classList.add('weiss');
    } else {
        newDiv.classList.add('rechteck');
        console.log(1);
    }
    container.appendChild(newDiv);
    num += 1;
};
