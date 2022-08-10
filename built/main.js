var worker = new Worker('worker.js');
var startTimerLabelElem = document.querySelector("#startTimerLabel");
var secForTimerElem = document.querySelector("#secForTimer");
var secForTimerValue = Number(secForTimerElem.value);
startTimerLabelElem.addEventListener("click", function (event) {
    secForTimerValue = Number(secForTimerElem.value);
    worker.postMessage(secForTimerValue);
});
worker.onmessage = function (message) {
    alert("\u0427\u0430\u0441 \u0432\u0438\u0439\u0448\u043E\u0432 (".concat(message.data, " \u0441\u0435\u043A)"));
    worker.terminate();
};
