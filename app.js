const path = require('path');
const express = require('express');
const app = express();
const PORT = 4200;

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});

app.listen(PORT, () => {
    console.log(`Application listening on port ${PORT}!`);
});
