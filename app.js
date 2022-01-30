const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')
const Customer = require('./models/customer');
db = require('./config/database')


db.authenticate()
.then(()=>console.log('database connected...'))
.catch(err=>console.log(err))


const app = express()
app.set('view engine', 'ejs');


app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.urlencoded({extended:false}))

const PORT = process.env.PORT || 5000

app.get('/buyticket',(req,res)=>{
    let movie_name = req.query.movie_name
    res.render('buyticket',{movie_name})
})

app.get('/',(req,res)=>{
    res.render('home')
})

// //routes

app.use('/customers',require('./routes/customers'))

app.use('/ticketmechanism',require('./routes/ticketmechanism'))



app.use('/reportoar',require('./routes/reportoari'))
app.use('/bestranked',require('./routes/bestrank'))
app.use('/projections',require('./routes/allproj'))

app.listen(PORT, console.log(`Server started on port: ${PORT}...`))

