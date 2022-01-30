const Sequelize = require('sequelize')
const db = require('../config/database')

const BestRanked = db.define('najdobro_rangirani',{

    rank:{
        type:Sequelize.INTEGER,
    },
    name:{
        type:Sequelize.STRING
    },
    week_of:{
        type:Sequelize.INTEGER
    },
    month:{
        type:Sequelize.INTEGER
    },
    
        
},{
    freezeTableName:true,
    createdAt: false,
    updatedAt: false,
})

BestRanked.removeAttribute('id');
module.exports = BestRanked;