const Axios = require('axios');

const getGreeting = async () => (await Axios.get('http://localhost:3002/api/greeting')).data;

module.exports = { getGreeting };
