const express = require('express');
const res = require('express/lib/response');
const { Cat } = require('./models')

const app = express();

app.use(express.json());

app.post('/cats', (req, res) => {
    Cat.create(req.body).then(cat => 
        res.status(201).json(cat));
});

app.get('/cats', (req, res) => {
    Cat.findAll().then(cat => 
        res.status(201).json(cat));
});

app.get('/cats/:catId', (req, res) => {
    const { catId } = req.params;

    Cat.findByPk(catId).then(cat => 
        res.status(201).json(cat));
});

app.get('/cats?markings=:query', (req, res) => {
    Cat.findAll({ where: req.query }).then(cat =>
        res.status(201).json(cat));
});

app.patch('/cats/:catId', (req, res) => {
    Cat.update(req.body, { where: { id: req.params.catId } }).then(cat =>
        res.status(201).json(cat));
});

app.delete('/cats/:catId', (req, res) => {
    Cat.destroy({ where: { id: req.params.catId }}).then(cat =>
        res.status(201).json(cat));
});

app.patch('/feed/:catID', (req, res) => {
    Cat.update({ lastFed: new Date() }).then(cat =>
        res.status(201).json(cat));
});

module.exports = app;