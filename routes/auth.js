const route = require('express').Router();

const UserController = require('../controllers/auth');

route.post('/register',UserController.Register);
route.get('/login',UserController.login);
route.put('/update',UserController.update);
route.delete('/delete',UserController.delete);

module.exports = route;