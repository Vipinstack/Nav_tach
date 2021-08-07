const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('../db/conn');
const User= require('../model/userschema');


// router.get('/', (req, res) => {
//     console.log(`this is a express router`); 
//     res.send('this is express  router');
// });

// promiss

// router.post('/register', (req, res) =>{

// const {name, email, phone, work, password, cpassword} = req.body;

// if(!name|| !email|| !phone|| !work|| !password|| !cpassword){
//     return res.status(422).json({error:'plzz fill the data'});
// }

// User.findOne({email:email})
// .then((userExist) =>{

//         if(userExist){
//             return res.status(422).json({error:' emial already exist'});
//         }

//         const user = new User ({name, email, phone, work, password, cpassword});

//         user.save().then( ()=>{

//             return res.status(201).json({message:'user is successful'});
        
//         }).catch( (err)=>res.status(500)).json({error:'failed to registration'});

//     }).catch(err => {console.log(err); });


// // console.log(name);
// //   console.log(req.body);
// //   res.json({ message : req.body });   
// });


router.post('/register', async (req, res) =>{

    const {name, email, phone, work, password, cpassword} = req.body;
    
    if(!name|| !email|| !phone|| !work|| !password|| !cpassword){
        return res.status(422).json({error:'plzz fill the data'});
    }

    try{

        const userExist = await User.findOne({email:email});

        if(userExist){
            return res.status(422).json({error:' email already exist'});
        }
        
        const userRes = await User.findOne({phone:phone});

        if(userRes){
            return res.status(422).json({error:' phone number already exist'});        
        }

        else if(password !== cpassword){
            return res.status(422).json({error:'password is not matching..'});
        }

        else
        {       
        
            const user = new User({name, email, phone, work, password, cpassword});
            //save data in db..
            await user.save();
    
            return res.status(201).json({message:'user is successful'});
    
        }     


    }catch (err){
        console.log(err);
    }

});


//route in singin..


router.post('/signin', async (req, res) => {

    try{
    const {email , password} = req.body;
    
    if (!email ||  !password ){
        return res.status(400).json({error:'plzz fill the data'});
    }

    const userLogin = await User.findOne({ email: email });
    
    // console.log(userLogin);


    if(userLogin){
        const ismatch = await bcrypt.compare(password, userLogin.password);


        const token = await userLogin.generateAuthToken();
        console.log(token);

        res.cookie("jwtoken", token, {
            expires:new Date(Date.now() + 25892000000),
            httpOnly:true
        });

        if(!ismatch)
        {
            res.status(400).json({ error : "Invalid crediential pass"});
        }
        else{
            res.json({ message: "User Signin successfully.."});
        } 
    }else{
        res.status(400).json({ error : "Invalid crediential pass"});
    }

   


}
catch(err){
    console.log(err);

}
    // console.log(req.body);
    // res.json({message:"right some"});

});

module.exports = router;