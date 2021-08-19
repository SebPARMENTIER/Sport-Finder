require('dotenv').config();

const express = require('express');
const apiRouter = require('./app/routers/api');
const websiteRouter = require('./app/routers/website');

const app = express();

const port = process.env.PORT || 3000;

app.use('/api', apiRouter);

app.use(websiteRouter);

app.listen(port, _ => {
   console.log(`http://localhost:${port}`);
});