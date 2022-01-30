const Sequelize = require('sequelize')
const db = require('../config/database')

const Movie = db.define('movie',{

    movie_id:{
        type:Sequelize.INTEGER,
        primaryKey: true
    },
    name:{
        type:Sequelize.STRING
    },
    year:{
        type:Sequelize.INTEGER
    },    
},{
    freezeTableName:true,
    createdAt: false,
    updatedAt: false,
})


module.exports = Movie;