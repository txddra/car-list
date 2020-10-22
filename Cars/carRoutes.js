const router = require('express').Router();
const Car = require('./models/Car');

const{getAllCars}=require('./controllers/carController');
const { get } = require('mongoose');

router.get('/get-cars', getAllCars)

module.exports =router