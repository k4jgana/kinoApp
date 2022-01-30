const Sequelize = require('sequelize')
const db = require('../config/database')
const Movie =require('../models/movie')

const Projection = db.define('projection',{

    projection_id:{
        type:Sequelize.INTEGER,
        primaryKey: true
    },
    time:{
        type:Sequelize.TIME
    },
    movie_id:{
        type:Sequelize.INTEGER,
        references: 'movie', // <<< Note, its table's name, not object name
        referencesKey: 'movie_id'
    },    
},{
    freezeTableName:true,
    createdAt: false,
    updatedAt: false,
})

Projection.hasOne(Movie, { foreignKey: 'movie_id', foreignKeyConstraint: true })

module.exports = Projection;