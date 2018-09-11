const moment = require('moment');

const getTime = () => {
    console.log('Calling getTime() in helpers module...');
    return moment().format('h:mm:ss a');
};

module.exports = { getTime };
