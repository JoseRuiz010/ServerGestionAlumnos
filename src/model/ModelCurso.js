const mongoose = require('mongoose');

const cursoSchema = mongoose.Schema({
    descripcion: String,
    alumnos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Alumno' }],
    materias: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Evaluacion' }]
}, {
    timestamps: true,
    versionKey: false
});

const modelCurso = mongoose.model('Curso', cursoSchema);
module.exports = modelCurso