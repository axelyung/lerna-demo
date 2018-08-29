const Koa = require('koa');
const Axios = require('axios');

const app = new Koa();

app.use(async (ctx) => {
    console.log('sending request to service...');
    ctx.body = (await Axios.get('http://localhost:3001')).data;
});

const port = 3000;

app.listen(port, () => console.log(`App up and running on port ${port}`));
