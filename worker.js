onmessage = function (message) {
    let secondsIterator = 0;

    let interval = setInterval(() => {
        console.log(Number(message.data) - secondsIterator);

        if (secondsIterator === Number(message.data)) {
            postMessage(message.data);
        }

        if (secondsIterator >= Number(message.data)) {
            clearInterval(interval);
        }
        secondsIterator++;
    }, 1000);
}
