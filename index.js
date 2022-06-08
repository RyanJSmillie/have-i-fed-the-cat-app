const app = require('./src/app');

const APP_PORT = 3004;

app.listen(APP_PORT, () => console.log(`Cats app is listening on localhost:${APP_PORT}`));