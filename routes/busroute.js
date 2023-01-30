const route = require('express').Router();

const busController = require('../controllers/bus');

route.post('/book',busController.book);
route.get('/check',busController.check);
// route.put('/update',UserController.update);
route.delete('/delete',busController.delete);

module.exports = route;