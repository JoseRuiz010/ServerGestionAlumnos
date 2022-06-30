const { Router } = require('express');
const { getUser, RegistrarUsuario, getUsers } = require('../Controller/ControllerUser');
const routerUser = Router()


routerUser.post('/', RegistrarUsuario);
routerUser.get('/', getUser);
routerUser.get('/all', getUsers);

module.exports = routerUser