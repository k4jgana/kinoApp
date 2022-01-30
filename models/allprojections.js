const Sequelize = require('sequelize')
const db = require('../config/database')

const allProjections = db.define('site_proekcii',{

    name:{
        type:Sequelize.STRING,
    },
    time:{
        type:Sequelize.TIME
    },
    hall_num:{
        type:Sequelize.INTEGER
    },  
},{
    freezeTableName:true,
    createdAt: false,
    updatedAt: false,
})

allProjections.removeAttribute('id');
module.exports = allProjections;