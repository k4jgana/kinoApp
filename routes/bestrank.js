const express = require('express')
const router = express.Router()
const db = require('../config/database')

const bestRanked = require('../models/bestranked')

router.get('/',(req,res)=>{
    bestRanked.findAll()
    .then(br=>{
        res.render('bestranked',{
            br:br
        })
        res.sendStatus(200)
    })
    .catch(err=>console.log(err))
})

module.exports = router