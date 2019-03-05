// const express = require('express');
// const app = express();

const bot = require('./src/bot.js');
//
// const PORT = 3000;
//
//
// app.get('/', (req, res) => res.send({ time: +(new  Date()) }));

bot.run();
// app.get('/ping', (req, res) => {
//   bot.run();
//
//   res.send({ message: 'pong' })
// });
//
// app.listen(PORT, function () {
//   console.log(`Calendar server listening on ${PORT}`);
// });
