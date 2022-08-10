window.addEventListener('load', (event) => {
    setInterval(setClock, 1000);
});

const hourArrow = document.querySelector('[data-hour]');
const minuteArrow = document.querySelector('[data-minute]');
const secondArrow= document.querySelector('[data-second]');

function setClock() {
    const currentDate = new Date();
    const secondsRatio= currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

    setRotation(secondArrow, secondsRatio);
    setRotation(minuteArrow, minutesRatio);
    setRotation(hourArrow, hoursRatio);
}

function setRotation(element, rotationRatio) {
    const round = 360;
    element.style.setProperty('--rotation', `${round * rotationRatio}`);
}

setClock();
