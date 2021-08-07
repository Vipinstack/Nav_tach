const dotenv=require('dotenv');
const mongoose=require('mongoose');
const express = require('express');
const app = express()

dotenv.config({ path: './config.env'});
require('./db/conn');
// const User= require('./model/userschema');

app.use(express.json());
//we link the router file to make  our route easy
app.use(require('./router/auth'));

const PORT= process.env.PORT;
 


//middleware

const middleware =(req, res, next) =>{
  console.log(`this is my middleware`);
  next();
}


// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/about', middleware, (req, res) => {
//     res.send('about me!')
// })

// app.get('/contact', (req, res) => {
//     res.send('Contact me!')
// })

// app.get('/signin', (req, res) => {
//     res.send('Registration!')
// })

// app.get('/signup', (req, res) => {
//     res.send('login!')
// })

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})