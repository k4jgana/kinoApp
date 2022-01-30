const express = require('express')
const router = express.Router()
const db = require('../config/database')
const customers = require('../models/customer')
const tickets = require('../models/ticket')
const projections = require('../models/projection')
const reportoar = require('../models/repertoire')
// get all customers in console  
// router.get('/',(req,res)=>{
//     tickets.findAll()
//     .then(ticket=>{
//         console.log(ticket)
//         res.sendStatus(200)
//     })
//     .catch(err=>console.log(err))
// })
// router.get('/',(req,res)=>{
//     projections.findAll()
//     .then(proj=>{
//         console.log(proj)
//         res.sendStatus(200)
//     })
//     .catch(err=>console.log(err))
// })
//ovde probvam

router.get('/',(req,res)=>{
    customers.findAll()
    .then(customer=>{
        console.log(customer)
        res.sendStatus(200)
    })
    .catch(err=>console.log(err))
})

//add a customer

// router.get('/customers/register',(req,res)=>{
//     res.render('register')
// })

// router.post('/register',(req,res)=>{
    
//     console.log(req.body)

//     let {name,surname} = req.body;
    



//     customers.create({
//         name,
//         surname
//     })
//     .then(customer => res.redirect('/customers'))
//     .catch(err=>console.log(err))
// })


//ovde za reportoarot se probva


module.exports = router