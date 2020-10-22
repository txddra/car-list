const router = require('../carRoutes');
const Car = require('../models/Car');


module.exports={
    getAllCars:(req, res) => {
        Car.find().then((foundCar) => {
            return res.render('main/index', {
                carsList: foundCar
            })
        }).catch((err) => {
            return res.status(400).json({
                confirmation: 'fail',
                message: 'Error',
                err
            })
        })
    }
}
