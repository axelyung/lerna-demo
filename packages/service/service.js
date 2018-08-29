const express = require('express');
const helpers = require('helpers');

const service = express();

service.get('/', (req, res) => {
    console.log('Sending request back to app...');
    res.send(`Hello world @${helpers.getTime()}`);
});

const port = 3001;

service.listen(port, () => console.log(`Service up and running on port ${port}`));
