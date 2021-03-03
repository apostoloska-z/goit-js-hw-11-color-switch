const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const bodyRef = document.querySelector('body');
const btnStartRef = document.querySelector('button[data-action = "start"]');
const btnStopRef = document.querySelector('button[data-action = "stop"]');


const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};


btnStartRef.addEventListener('click', activateBtns)

function changeColor () {
    const index = randomIntegerFromInterval(0, colors.length-1);
    bodyRef.style.backgroundColor = `${colors[index]}`;
}

function activateBtns() {
    const intervalId = setInterval(()=> {
        changeColor()
        btnStartRef.setAttribute('disabled', true);
        btnStopRef.addEventListener('click', () => {
            clearInterval(intervalId);
            btnStartRef.removeAttribute('disabled');
        })
    }, 1000)
  
}





