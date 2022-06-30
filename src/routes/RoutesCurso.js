const { Router } = require('express');
const { RegistrarCurso, getCurso, getCursos } = require('../Controller/ControllerCurso');
const routerCurso = Router()


routerCurso.post('/', RegistrarCurso);
routerCurso.get('/', getCurso);
routerCurso.get('/all', getCursos);

module.exports = routerCurso