const mongoose = require('mongoose');

const profesorSchema = mongoose.Schema({

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

const modelProfesor = mongoose.model('Profesor', profesorSchema);
module.exports = modelProfesor

