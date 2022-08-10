window.addEventListener('load', function (event) {
    setInterval(setClock, 1000);
});
var hourArrow = document.querySelector('[data-hour]');
var minuteArrow = document.querySelector('[data-minute]');
var secondArrow = document.querySelector('[data-second]');
function setClock() {
    var currentDate = new Date();
    var secondsRatio = currentDate.getSeconds() / 60;
    var minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    var hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
    setRotation(secondArrow, secondsRatio);
    setRotation(minuteArrow, minutesRatio);
    setRotation(hourArrow, hoursRatio);
}
function setRotation(element, rotationRatio) {
    var round = 360;
    element.style.setProperty('--rotation', "".concat(round * rotationRatio));
}
setClock();
