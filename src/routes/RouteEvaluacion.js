
const { Router } = require('express');
const { RegistrarEvaluacion, getEvaluacion, getEvaluaciones } = require('../Controller/ControllerEvaluacion');
const routerEvaluacion = Router()


routerEvaluacion.post('/', RegistrarEvaluacion);
routerEvaluacion.get('/', getEvaluacion);
routerEvaluacion.get('/all', getEvaluaciones);

module.exports = routerEvaluacion