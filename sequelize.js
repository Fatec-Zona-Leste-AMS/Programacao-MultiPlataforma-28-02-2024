const Sequelize = require('sequelize');
const sequelize = new Sequelize('example', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(() => {
    console.log('success connection');
}).catch((error) => {
    console.log(`bad connection ${error}`)
})

const Schedules = sequelize.define('schedules', {
    name: {
        type: Sequelize.STRING
    },
    address: {
        type: Sequelize.STRING
    },
    neighborhood: {
        type: Sequelize.STRING
    },
    zip_code: {
        type: Sequelize.STRING
    },
    city: {
        type: Sequelize.STRING
    },
    state: {
        type: Sequelize.STRING
    }
})

// Schedules.sync({force: true})

module.exports = Schedules;

/*
    Schedules.create({
        name: 'Jefferson Oliveira',
        address: 'Av. Aguia de Haia, 2500',
        neighborhood: 'Jd Sao Nicolau',
        zip_code: '09231-221',
        city: 'Sao Paulo',
        state: 'SP'
    })
*/