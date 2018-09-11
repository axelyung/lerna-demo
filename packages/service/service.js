const express = require('express');
const helpers = require('@demo/helpers');

const service = express();

// greeting endpoint
service.get('/api/greeting', (req, res) => {
    console.log('Sending request back to app...');
    res.send(`Hello world @${helpers.getTime()}`);
});

const port = 3002;

service.listen(port, () => console.log(`Service up and running on port ${port}`));
