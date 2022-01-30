const Sequelize = require('sequelize')
const db = require('../config/database');
const Customer = require('./customer');
const Projection = require('./projection');

const Ticket = db.define('ticket',{

    ticket_num:{
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    date:{
        type:Sequelize.DATE,
        defaultValue: Date.now()
    },
    price:{
        type:Sequelize.INTEGER
    },
    projection_id:{
        type:Sequelize.INTEGER,
        references: 'projection', // <<< Note, its table's name, not object name
        referencesKey: 'projection_id'
    }, 
    customer_id:{
        type:Sequelize.INTEGER,
        references: 'customer', // <<< Note, its table's name, not object name
        referencesKey: 'customer_id'
    },    
},{
    freezeTableName:true,
    createdAt: false,
    updatedAt: false,
})

Ticket.hasOne(Projection, { foreignKey: 'projection_id', foreignKeyConstraint: true })
Ticket.hasOne(Customer,{foreignKey: 'id', foreignKeyConstraint: true})

module.exports = Ticket;