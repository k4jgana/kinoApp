const Sequelize = require('sequelize')
const db = require('../config/database')

const Repertoire = db.define('reportoar_filmovi',{

    name:{
        type:Sequelize.STRING,
    },
    date:{
        type:Sequelize.DATE
    }    
},{
    freezeTableName:true,
    createdAt: false,
    updatedAt: false,
})

Repertoire.removeAttribute('id');
module.exports = Repertoire;