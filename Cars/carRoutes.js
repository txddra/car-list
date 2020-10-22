const router = require('express').Router();
const Car = require('./models/Car');


router.get('/get-cars',(req,res)=>{
    Car.find().then((foundCar)=>{
        return res.render('main/index',{
            carsList : foundCar
        })
    }).catch((err)=>{
      return res.status(400).json({ confirmation: 'fail', message: 'Error', err })
    })
})


