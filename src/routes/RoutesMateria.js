const { Router } = require('express');
const { Registrarmateria, getMateria, getMaterias } = require('../Controller/ControllerMateria');
const routerMateria = Router()


routerMateria.post('/', Registrarmateria);
routerMateria.get('/', getMateria);
routerMateria.get('/all', getMaterias);

module.exports = routerMateria