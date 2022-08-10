const worker = new Worker('worker.js');

const startTimerLabelElem = document.querySelector("#startTimerLabel");
const secForTimerElem = document.querySelector("#secForTimer");
let secForTimerValue = Number(secForTimerElem.value);

startTimerLabelElem.addEventListener("click", (event) => {
    secForTimerValue = Number(secForTimerElem.value);
    worker.postMessage(secForTimerValue);
});

worker.onmessage = function (message) {
    alert(`Час вийшов (${message.data} сек)`);
    worker.terminate();
}

