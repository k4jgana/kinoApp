const express = require('express')
const router = express.Router()
const db = require('../config/database')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

const Movie = require('../models/movie')
const Ticket = require('../models/ticket')
const Projection = require('../models/projection')
const Customer = require('../models/customer')



router.post('/buy', async (req,res)=>{
    
    console.log(req.body)
    
    customerName = req.body.name;
    customerSurname = req.body.surname;
    movieName = req.body.movie_name;
    console.log(movieName)
    //najdeno movie id
    var movieID = await Movie.findOne({
        raw:true,
        attributes: ["movie_id"],
        where: {name:movieName}
    })
    
    movieID = movieID.movie_id

    //najdi projection id preku movie_id

    var projectionID = await Projection.findOne({
        raw:true,
        attributes: ["projection_id"],
        where: {movie_id:movieID}
    })

    projectionID = projectionID.projection_id

    //najdi customer_id preku ime prezime customer ako ne postoi kreirajgo

    var customerID = await Customer.findOne({
        raw:true,
        attributes: ["id"],
        where: {name:customerName,surname: customerSurname}
    })

    if(customerID===null){
        await Customer.create({
                    name:customerName,
                    surname:customerSurname
                })
                .then(c => 
                    console.log(c))
                .catch(err=>console.log(err))

        var customerID = await Customer.findOne({
            raw:true,
            attributes: ["id"],
            where: {name:customerName,surname: customerSurname}
        })
            
    }

    customerID = customerID.id

   
    console.log(`the movie id and projection id for ${movieName} is ${movieID},${projectionID} and the the id for the customer ${customerName} ${customerSurname} is ${customerID}`)


    //get customer points
    var customerPoints = await Customer.findOne({
        raw:true,
        attributes: ["points"],
        where: {name:customerName,surname: customerSurname}
    })

    customerPoints = customerPoints.points

    //pravenje ticket

    if(customerPoints<10){

        Customer.update(
            {points: customerPoints+1},
            {where:{name:customerName,surname: customerSurname}}
        ).then(c=>console.log('points have been updated'))

        Ticket.create({
            price:200,
            projection_id:projectionID,
            customer_id:customerID
        }).then(t=> res.redirect('/'))
    }
    else{
        Customer.update(
            {points: customerPoints-10},
            {where:{name:customerName,surname: customerSurname}}
        ).then(c=>console.log('points have been taken'))

        Ticket.create({
            price:0,
            projection_id:projectionID,
            customer_id:customerID
        }).then(t=> res.redirect('/'))
    }
})



module.exports = router