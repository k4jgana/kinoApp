const Sequelize = require('sequelize')
const db = require('../config/database')

const Customer = db.define('customer',{

    id:{
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type:Sequelize.STRING
    },
    surname:{
        type:Sequelize.STRING
    },
    points:{
        type:Sequelize.INTEGER,
        defaultValue: 0
    },    
},{
    freezeTableName:true,
    createdAt: false,
    updatedAt: false,
})

module.exports = Customer;