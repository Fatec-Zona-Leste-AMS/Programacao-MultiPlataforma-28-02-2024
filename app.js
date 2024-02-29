const express = require('express');
const Schedules = require('./sequelize');

const app = express();

app.listen(3000, () => {
    console.log('starting server');
});

app.get('/', (req, res) => {
    res.send("Home Page");
})

app.get('/register', (req, res) => {
  res.send('Register Page')
})

app.get('/list/:product', (req, res) => {
    res.send(`Page Products ${req.params.product}`)
})

app.get('/update/:product/:amount', (req, res) => {
    res.send({
        product: req.params.product,
        amount: req.params.amount
    })
})


app.get('/register/scredule', (req, res) => {
    Schedules.create({
        name: 'José Oliveira',
        address: 'Av. Aguia de Haia, 2500',
        neighborhood: 'Jd Sao Nicolau',
        zip_code: '09231-221',
        city: 'Sao Paulo',
        state: 'SP'
    })

    res.send('success create')
})