const moment = require('moment');

const getTime = () => {
    const time = moment().format('h:mm:ss a');
    console.log(`HELPER: Time now is ${time}`);
    return time;
};

module.exports = { getTime };
