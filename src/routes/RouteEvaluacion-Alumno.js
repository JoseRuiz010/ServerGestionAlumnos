const { Router } = require('express');
const { RegistrarEvaluacionNota, getEvaluacionAlumnos, getEvaluacionAlumno, updateEcavluacionAlumno, getEvaluacionAlumnoById } = require('../Controller/ControllerEvaluacion-alumno');
const routerEvaluacionAlumno = Router()


routerEvaluacionAlumno.post('/', RegistrarEvaluacionNota);
routerEvaluacionAlumno.put('/', updateEcavluacionAlumno);
routerEvaluacionAlumno.get('/', getEvaluacionAlumno);
routerEvaluacionAlumno.get('/all', getEvaluacionAlumnos);
routerEvaluacionAlumno.get('/one', getEvaluacionAlumnoById);


module.exports = routerEvaluacionAlumno