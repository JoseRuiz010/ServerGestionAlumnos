const { Router } = require('express');
const { RegistrarProfesor, getProfesor, getProfesores } = require('../Controller/ControllerProfesor');

const routerProfesor = Router()


routerProfesor.post('/', RegistrarProfesor);
routerProfesor.get('/', getProfesor);
routerProfesor.get('/all', getProfesores);

module.exports = routerProfesor