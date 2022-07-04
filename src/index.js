var cors = require('cors')
const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routerMateria = require('./routes/RoutesMateria');
const routerAlumno = require('./routes/RouteAlumno');
const routerProfesor = require('./routes/RouteProfesor');
const routerEvaluacion = require('./routes/RouteEvaluacion');
const routerCurso = require('./routes/RoutesCurso');
const routerUser = require('./routes/RouteUser');
const routerEvaluacionAlumno = require('./routes/RouteEvaluacion-Alumno');




const app = express();




app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.json());



app.use("/materia", routerMateria);
app.use("/alumno", routerAlumno);
app.use("/profesor", routerProfesor);
app.use("/evaluacion", routerEvaluacion);
app.use("/evaluacionAlumno", routerEvaluacionAlumno);
app.use("/curso", routerCurso);
app.use("/user", routerUser);
app.get('/', (req, res) => res.send("App Gestion almnos"))




app.listen(3000, () => { console.log("Server on Port 3000") })




main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://joseruiz:1234@cluster0.jc3kc.mongodb.net/DBGestionAlumnos?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(db => console.log('Db is conect'))
        .catch(err => console.log(err));

}