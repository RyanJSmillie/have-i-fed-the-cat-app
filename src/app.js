const express = require('express');

const app = express();

app.use(express.json());

// we will put our routes and controller functions here

module.exports = app;