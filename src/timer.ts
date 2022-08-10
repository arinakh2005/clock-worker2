window.addEventListener('load', (event) => {
    setInterval(setClock, 1000);
});

const hourArrow: HTMLElement = document.querySelector('[data-hour]');
const minuteArrow: HTMLElement = document.querySelector('[data-minute]');
const secondArrow: HTMLElement = document.querySelector('[data-second]');

function setClock() {
    const currentDate: Date = new Date();
    const secondsRatio: number = currentDate.getSeconds() / 60;
    const minutesRatio: number = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio: number = (minutesRatio + currentDate.getHours()) / 12;

    setRotation(secondArrow, secondsRatio);
    setRotation(minuteArrow, minutesRatio);
    setRotation(hourArrow, hoursRatio);
}

function setRotation(element: HTMLElement, rotationRatio: number) {
    const round: number = 360;
    element.style.setProperty('--rotation', `${round * rotationRatio}`);
}

setClock();
