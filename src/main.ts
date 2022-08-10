const worker = new Worker('worker.js');

const startTimerLabelElem: HTMLElement = document.querySelector("#startTimerLabel");
const secForTimerElem: HTMLInputElement = document.querySelector("#secForTimer");
let secForTimerValue: number = Number(secForTimerElem.value);

startTimerLabelElem.addEventListener("click", (event) => {
    secForTimerValue = Number(secForTimerElem.value);
    worker.postMessage(secForTimerValue);
});

worker.onmessage = function (message) {
    alert(`Час вийшов (${message.data} сек)`);
    worker.terminate();
}

