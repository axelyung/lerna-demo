const Koa = require('koa');
const serviceAdapter = require('@demo/service/adapter');

const app = new Koa();

app.use(async (ctx) => {
    console.log('Sending request to service...');
    ctx.body = await serviceAdapter.getGreeting();
});

const port = 3001;

app.listen(port, () => console.log(`App up and running on port ${port}`));
