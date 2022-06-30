const { Router } = require('express');
const { RegistrarmAlumno, getAlumno, getAlumnos } = require('../Controller/ControllerAlumno');

const routerAlumno = Router()


routerAlumno.post('/', RegistrarmAlumno);
routerAlumno.get('/', getAlumno);
routerAlumno.get('/all', getAlumnos);

module.exports = routerAlumno