const express = require('express')
const router = express.Router()
const db = require('../config/database')

const reportoar = require('../models/repertoire')

router.get('/',(req,res)=>{
    reportoar.findAll()
    .then(rep=>{
        res.render('reportoar',{
            rep:rep
        })
        res.sendStatus(200)
    })
    .catch(err=>console.log(err))
})

module.exports = router