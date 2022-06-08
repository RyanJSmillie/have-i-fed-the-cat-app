const Sequelize = require('sequelize');
const { addListener } = require('../app');
const CatModel = require('./cats');

exports.setUpDatabase = () => {
    const connection = new Sequelize("have-i-fed-the-cat-app", "root", "password", {
    host: "localhost",
    port: 3307,
    dialect: "mysql"
    })

    const Cat = CatModel(connectio, Sequelize);

    connection.sync({alter: true});

    return { Cat };
};