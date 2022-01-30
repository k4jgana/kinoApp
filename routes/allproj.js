const express = require('express')
const router = express.Router()
const db = require('../config/database')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

const allProjections = require('../models/allprojections')

router.get('/',(req,res)=>{
    allProjections.findAll()
    .then(ap=>{
        res.render('allprojections',{
            ap:ap
        })
        res.sendStatus(200)
    })
    .catch(err=>console.log(err))
})


router.get('/search',(req,res)=>{
    const {movie_name} = req.query;
    allProjections.findAll({where: {name: {[Op.iLike]: '%'+movie_name+'%'}}})
    .then(ap =>{
        res.render('allprojections',{ap})   
    })
    .catch(err=>console.log(err))
})





// router.get('/search',(req,res)=>{
//     const {time} = req.query;
//     allProjections.findAll({where: {time: {[Op.iLike]: '%'+time.+'%'}}})
//     .then(ap =>{
//         res.render('allprojections',{ap})   
//     })
//     .catch(err=>console.log(err))
// })

module.exports = router