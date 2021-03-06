const mongoose = require('mongoose');

const alumnoSchema = mongoose.Schema({

    nombre: String,
    apellido: String,
    telefono: String,
    email: String,
    legajo: String,
    direccion: String

}, {
    timestamps: true,
    versionKey: false
});

const modelAlumno = mongoose.model('Alumno', alumnoSchema);
module.exports = modelAlumno

