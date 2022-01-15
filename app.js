const express = require('express');
const app = express();

app.get('/home', (request, response, next) => {
    response.send('<h1>Welcome<h1>');
});

app.listen(3000, () => console.log('This is working!'));